import fitz
import json
import re
import os

pdf_path = r"C:/Research/Fadil/BSG MAT101 Compiled Practice Questions - UPDATED (2025).pdf"
doc = fitz.open(pdf_path)

# ==========================================
# 1. PARSE ANSWER KEYS (Pages 48 - 52)
# ==========================================
answers_by_topic = {
    'SET THEORY': {},
    'MAPPING AND FUNCTION': {},
    'COMPLEX NUMBER': {},
    'INEQUALITY': {},
    'SURD': {},
    'INDICES AND LOGARITHMS': {},
    'MATHEMATICAL INDUCTION': {},
    'BINOMIAL EXPANSION': {},
    'MATRICES AND DETERMINANT': {},
    'QUADRATIC EQUATION': {}
}

def parse_double_topic_answers(page_num, t1_name, t2_name):
    text = doc[page_num - 1].get_text('text')
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    # Filter out header words
    tokens = []
    for l in lines:
        if l in ['ANSWERS', t1_name, t2_name, 'MATRICES AND DETERMINANTS', str(page_num)]:
            continue
        tokens.append(l)
    
    # Process pairs: num., val
    pairs = []
    i = 0
    while i < len(tokens):
        m = re.match(r'^(\d+)\.$', tokens[i])
        if m:
            num = int(m.group(1))
            val = tokens[i+1] if i+1 < len(tokens) else ''
            # Handle 'All of the' 'above'
            if val == 'All of the' and i+2 < len(tokens) and tokens[i+2] == 'above':
                val = 'All of the above'
                i += 3
            else:
                i += 2
            pairs.append((num, val))
        else:
            i += 1
            
    # For 60+60 topics, there are 120 pairs
    # Rows are 6 items wide: T1(i), T1(i+20), T1(i+40), T2(i), T2(i+20), T2(i+40)
    for row in range(20):
        base = row * 6
        if base + 5 < len(pairs):
            answers_by_topic[t1_name][pairs[base][0]] = pairs[base][1]
            answers_by_topic[t1_name][pairs[base+1][0]] = pairs[base+1][1]
            answers_by_topic[t1_name][pairs[base+2][0]] = pairs[base+2][1]
            answers_by_topic[t2_name][pairs[base+3][0]] = pairs[base+3][1]
            answers_by_topic[t2_name][pairs[base+4][0]] = pairs[base+4][1]
            answers_by_topic[t2_name][pairs[base+5][0]] = pairs[base+5][1]

# Page 48: SET THEORY & MAPPING AND FUNCTION
parse_double_topic_answers(48, 'SET THEORY', 'MAPPING AND FUNCTION')

# Page 49: COMPLEX NUMBER & INEQUALITY
parse_double_topic_answers(49, 'COMPLEX NUMBER', 'INEQUALITY')

# Page 50: SURD & INDICES AND LOGARITHMS
parse_double_topic_answers(50, 'SURD', 'INDICES AND LOGARITHMS')

# Page 51: MATHEMATICAL INDUCTION (20) & BINOMIAL EXPANSION (40)
p51_text = doc[50].get_text('text')
p51_lines = [l.strip() for l in p51_text.split('\n') if l.strip()]
p51_tokens = [l for l in p51_lines if l not in ['ANSWERS', 'MATHEMATICAL INDUCTION', 'BINOMIAL EXPANSION', '51']]
p51_pairs = []
i = 0
while i < len(p51_tokens):
    m = re.match(r'^(\d+)\.$', p51_tokens[i])
    if m:
        num = int(m.group(1))
        val = p51_tokens[i+1] if i+1 < len(p51_tokens) else ''
        p51_pairs.append((num, val))
        i += 2
    else:
        i += 1

# Each row has 3 pairs: Induction(i), Binomial(i), Binomial(i+20)
for row in range(20):
    base = row * 3
    if base + 2 < len(p51_pairs):
        answers_by_topic['MATHEMATICAL INDUCTION'][p51_pairs[base][0]] = p51_pairs[base][1]
        answers_by_topic['BINOMIAL EXPANSION'][p51_pairs[base+1][0]] = p51_pairs[base+1][1]
        answers_by_topic['BINOMIAL EXPANSION'][p51_pairs[base+2][0]] = p51_pairs[base+2][1]

# Page 52: MATRICES AND DETERMINANT & QUADRATIC EQUATION
parse_double_topic_answers(52, 'MATRICES AND DETERMINANT', 'QUADRATIC EQUATION')

print("Parsed answers summary:")
for t, ans in answers_by_topic.items():
    print(f"  {t}: {len(ans)} answers")

# ==========================================
# 2. PARSE QUESTIONS AND OPTIONS
# ==========================================
topics_meta = [
    {'name': 'SET THEORY', 'start': 0, 'end': 4, 'count': 60},
    {'name': 'MAPPING AND FUNCTION', 'start': 5, 'end': 10, 'count': 60},
    {'name': 'COMPLEX NUMBER', 'start': 11, 'end': 15, 'count': 60},
    {'name': 'INEQUALITY', 'start': 16, 'end': 20, 'count': 60},
    {'name': 'SURD', 'start': 21, 'end': 25, 'count': 60},
    {'name': 'INDICES AND LOGARITHMS', 'start': 26, 'end': 30, 'count': 60},
    {'name': 'MATHEMATICAL INDUCTION', 'start': 31, 'end': 32, 'count': 20},
    {'name': 'BINOMIAL EXPANSION', 'start': 33, 'end': 36, 'count': 40},
    {'name': 'MATRICES AND DETERMINANT', 'start': 37, 'end': 41, 'count': 60},
    {'name': 'QUADRATIC EQUATION', 'start': 42, 'end': 46, 'count': 60}
]

all_questions = []

for meta in topics_meta:
    topic_name = meta['name']
    text = ''
    for p in range(meta['start'], meta['end'] + 1):
        p_txt = doc[p].get_text('text')
        # Remove header like 'SET THEORY' if present on page
        text += p_txt + '\n'
        
    # Split by questions: '\n1. ', '\n2. ', etc.
    # Find positions of all '^\s*(\d{1,2})\.\s+'
    pattern = re.compile(r'(?:^|\n)\s*(\d{1,2})\.\s+')
    matches = list(pattern.finditer(text))
    
    # We want sequential 1..count
    filtered_matches = []
    expected_num = 1
    for m in matches:
        q_num = int(m.group(1))
        if q_num == expected_num:
            filtered_matches.append((q_num, m.start()))
            expected_num += 1
            if expected_num > meta['count']:
                break
                
    for idx, (q_num, start_pos) in enumerate(filtered_matches):
        end_pos = filtered_matches[idx+1][1] if idx+1 < len(filtered_matches) else len(text)
        block = text[start_pos:end_pos].strip()
        
        # Remove the leading '1. '
        block = re.sub(r'^\d+\.\s*', '', block).strip()
        
        # Parse question text and options A., B., C., D., E.
        # Options usually start with A. or A)
        opt_pattern = re.compile(r'(?:^|\n)\s*([A-E])[\.\)]\s*')
        opt_matches = list(opt_pattern.finditer(block))
        
        if opt_matches:
            q_text = block[:opt_matches[0].start()].strip()
            # Clean up newlines in question text
            q_text = ' '.join(q_text.split())
            options = {}
            for o_idx, om in enumerate(opt_matches):
                opt_letter = om.group(1)
                o_start = om.end()
                o_end = opt_matches[o_idx+1].start() if o_idx+1 < len(opt_matches) else len(block)
                opt_val = block[o_start:o_end].strip()
                opt_val = ' '.join(opt_val.split())
                options[opt_letter] = opt_val
        else:
            q_text = ' '.join(block.split())
            options = {}
            
        correct_ans = answers_by_topic[topic_name].get(q_num, '')
        
        all_questions.append({
            'id': f"{topic_name[:3]}_{q_num:02d}",
            'topic': topic_name,
            'question_number': q_num,
            'question': q_text,
            'options': options,
            'answer': correct_ans
        })

print(f"\nTotal questions successfully parsed: {len(all_questions)}")

# Write to JSON
os.makedirs('data', exist_ok=True)
with open('data/mat101_questions.json', 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

print("Saved to data/mat101_questions.json")
