import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Modal,
  Alert
} from 'react-native';

// Import Offline JSON Data
import questionsData from './data/questions.json';
import flashcardsData from './data/flashcards.json';

// Supported 100L Courses Registry
const COURSES = [
  { code: 'MAT 101', title: 'Elementary Mathematics I', status: 'Active (540 Qs)', count: 540, semester: '1st Sem' },
  { code: 'PHY 101', title: 'General Physics I', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'CHM 101', title: 'General Chemistry I', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'GST 101', title: 'Use of English I', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'GST 103', title: 'Nigerian Peoples & Culture', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'CSC 101', title: 'Introduction to Computing', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'BIO 101', title: 'General Biology I', status: 'Coming Soon', count: 0, semester: '1st Sem' },
  { code: 'MAT 102', title: 'Elementary Mathematics II', status: 'Coming Soon', count: 0, semester: '2nd Sem' },
  { code: 'PHY 102', title: 'General Physics II', status: 'Coming Soon', count: 0, semester: '2nd Sem' },
  { code: 'CHM 102', title: 'General Chemistry II', status: 'Coming Soon', count: 0, semester: '2nd Sem' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('cbt'); // 'cbt', 'drills', 'flashcards', 'vault'
  const [selectedCourse, setSelectedCourse] = useState('MAT 101');
  const [courseModalVisible, setCourseModalVisible] = useState(false);
  
  // CBT State
  const [cbtActive, setCbtActive] = useState(false);
  const [cbtQuestions, setCbtQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timerSeconds, setTimerSeconds] = useState(45 * 60);
  const [cbtResult, setCbtResult] = useState(null);

  // Drill State
  const [drillTopic, setDrillTopic] = useState('SET THEORY');
  const [drillAnswered, setDrillAnswered] = useState({});

  // Flashcard State
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);

  // Mistake Vault State
  const [mistakeVault, setMistakeVault] = useState([]);

  // CBT Timer effect
  useEffect(() => {
    let interval = null;
    if (cbtActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0 && cbtActive) {
      submitExam();
    }
    return () => clearInterval(interval);
  }, [cbtActive, timerSeconds]);

  // Start Exam
  const startExam = () => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random()).slice(0, 50);
    setCbtQuestions(shuffled);
    setCurrentIdx(0);
    setUserAnswers({});
    setTimerSeconds(45 * 60);
    setCbtResult(null);
    setCbtActive(true);
  };

  // Submit Exam
  const submitExam = () => {
    let score = 0;
    const newMistakes = [];
    cbtQuestions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (ans && ans.toUpperCase() === q.answer.trim().toUpperCase()) {
        score++;
      } else {
        newMistakes.push(q);
      }
    });

    // Save mistakes to Mistake Vault
    setMistakeVault(prev => {
      const existingIds = new Set(prev.map(m => m.id));
      const added = newMistakes.filter(m => !existingIds.has(m.id));
      return [...prev, ...added];
    });

    setCbtActive(false);
    setCbtResult({
      score,
      total: cbtQuestions.length,
      percentage: Math.round((score / cbtQuestions.length) * 100)
    });
  };

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0F19" />

      {/* Top Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brandTitle}>FUTMINNA 100L PASS</Text>
          <Text style={styles.brandSubtitle}>Grade-A Mastery System</Text>
        </View>

        {/* Course Switcher Badge */}
        <TouchableOpacity
          style={styles.courseBadge}
          onPress={() => setCourseModalVisible(true)}
        >
          <Text style={styles.courseBadgeText}>{selectedCourse} ▼</Text>
        </TouchableOpacity>
      </View>

      {/* Main Screen Content */}
      <View style={styles.body}>
        {/* TAB 1: CBT SIMULATOR */}
        {activeTab === 'cbt' && (
          <View style={styles.tabContainer}>
            {!cbtActive && !cbtResult && (
              <View style={styles.startCard}>
                <Text style={styles.screenHeading}>FUTMINNA CBT Simulator</Text>
                <Text style={styles.screenSubtext}>
                  Timed 50-Question e-Exam mode for {selectedCourse}. Master speed hacks and score above 70% (A).
                </Text>
                
                <View style={styles.specBox}>
                  <Text style={styles.specItem}>• 50 Randomized Exam Questions</Text>
                  <Text style={styles.specItem}>• 45 Minutes Strict Countdown</Text>
                  <Text style={styles.specItem}>• Full Diagnostic Review & Speed Hacks</Text>
                  <Text style={styles.specItem}>• Automatic Mistake Vault Integration</Text>
                </View>

                <TouchableOpacity style={styles.primaryBtn} onPress={startExam}>
                  <Text style={styles.primaryBtnText}>🚀 Start 50-Q Timed Mock</Text>
                </TouchableOpacity>
              </View>
            )}

            {cbtActive && cbtQuestions.length > 0 && (
              <View style={styles.examContainer}>
                {/* Timer Bar */}
                <View style={styles.timerBar}>
                  <Text style={styles.qIndicator}>Q {currentIdx + 1} of {cbtQuestions.length}</Text>
                  <Text style={[styles.timerText, timerSeconds < 300 && styles.dangerTimer]}>
                    ⏱ {formatTimer(timerSeconds)}
                  </Text>
                  <TouchableOpacity style={styles.submitBtn} onPress={submitExam}>
                    <Text style={styles.submitBtnText}>Submit</Text>
                  </TouchableOpacity>
                </View>

                {/* Question Prompt */}
                <ScrollView style={styles.qScroll}>
                  <View style={styles.qCard}>
                    <Text style={styles.topicBadge}>{cbtQuestions[currentIdx]?.topic}</Text>
                    <Text style={styles.qText}>{cbtQuestions[currentIdx]?.question}</Text>
                  </View>

                  {/* Options */}
                  <View style={styles.optionsBox}>
                    {Object.entries(cbtQuestions[currentIdx]?.options || {}).map(([opt, text]) => {
                      const isSelected = userAnswers[currentIdx] === opt;
                      return (
                        <TouchableOpacity
                          key={opt}
                          style={[styles.optItem, isSelected && styles.optSelected]}
                          onPress={() => setUserAnswers({ ...userAnswers, [currentIdx]: opt })}
                        >
                          <Text style={[styles.optLetter, isSelected && styles.optLetterSelected]}>{opt}</Text>
                          <Text style={[styles.optText, isSelected && styles.optTextSelected]}>{text}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </ScrollView>

                {/* Bottom CBT Navigation */}
                <View style={styles.cbtBottomNav}>
                  <TouchableOpacity
                    style={[styles.navArrowBtn, currentIdx === 0 && styles.btnDisabled]}
                    disabled={currentIdx === 0}
                    onPress={() => setCurrentIdx(c => c - 1)}
                  >
                    <Text style={styles.navArrowText}>← Prev</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.navArrowBtn, currentIdx === cbtQuestions.length - 1 && styles.btnDisabled]}
                    disabled={currentIdx === cbtQuestions.length - 1}
                    onPress={() => setCurrentIdx(c => c + 1)}
                  >
                    <Text style={styles.navArrowText}>Next →</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {cbtResult && (
              <ScrollView style={styles.resultContainer}>
                <View style={styles.resultCard}>
                  <Text style={styles.resultHeading}>Exam Complete! 🎓</Text>
                  <Text style={styles.resultScore}>
                    {cbtResult.score} / {cbtResult.total}
                  </Text>
                  <Text style={[styles.gradeBadge, cbtResult.percentage >= 70 ? styles.gradeA : styles.gradeReview]}>
                    {cbtResult.percentage >= 70 ? 'GRADE A (DISTINCTION) 🏆' : 'NEEDS PRACTICE 👍'} ({cbtResult.percentage}%)
                  </Text>
                  <Text style={styles.resultNote}>
                    {cbtResult.percentage >= 70 
                      ? 'Incredible performance! You have the speed and precision for an A.'
                      : 'Missed questions were saved to your Mistake Vault. Review them now to close gaps!'}
                  </Text>

                  <TouchableOpacity style={styles.primaryBtn} onPress={startExam}>
                    <Text style={styles.primaryBtnText}>🔄 Take Another Mock</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        )}

        {/* TAB 2: TOPIC DRILLS */}
        {activeTab === 'drills' && (
          <ScrollView style={styles.tabContainer}>
            <Text style={styles.screenHeading}>Topic Drills & Instant Hacks</Text>
            <Text style={styles.screenSubtext}>Select a topic to reveal step-by-step proofs and 20-second CBT shortcuts.</Text>

            {/* Topic Chips */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
              {['SET THEORY', 'MAPPING AND FUNCTION', 'COMPLEX NUMBER', 'INEQUALITY', 'SURD', 'INDICES AND LOGARITHMS', 'MATHEMATICAL INDUCTION', 'BINOMIAL EXPANSION', 'MATRICES AND DETERMINANT', 'QUADRATIC EQUATION'].map(t => (
                <TouchableOpacity
                  key={t}
                  style={[styles.chip, drillTopic === t && styles.chipActive]}
                  onPress={() => setDrillTopic(t)}
                >
                  <Text style={[styles.chipText, drillTopic === t && styles.chipTextActive]}>{t}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Questions of Selected Topic */}
            {questionsData.filter(q => q.topic === drillTopic).slice(0, 15).map(q => {
              const answered = drillAnswered[q.id];
              return (
                <View key={q.id} style={styles.drillCard}>
                  <Text style={styles.drillQNum}>Question {q.question_number}</Text>
                  <Text style={styles.drillPrompt}>{q.question}</Text>

                  <View style={styles.optionsBox}>
                    {Object.entries(q.options).map(([opt, text]) => {
                      const isCorrect = opt.toUpperCase() === q.answer.trim().toUpperCase();
                      const isChosen = answered === opt;
                      let bgStyle = styles.optItem;
                      if (answered) {
                        if (isCorrect) bgStyle = styles.optCorrect;
                        else if (isChosen) bgStyle = styles.optWrong;
                      }

                      return (
                        <TouchableOpacity
                          key={opt}
                          style={bgStyle}
                          onPress={() => setDrillAnswered({ ...drillAnswered, [q.id]: opt })}
                        >
                          <Text style={styles.optLetter}>{opt}</Text>
                          <Text style={styles.optText}>{text}</Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  {answered && (
                    <View style={styles.solutionBox}>
                      <Text style={styles.solutionTitle}>💡 Answer: {q.answer}</Text>
                      <Text style={styles.speedHackText}>{q.speed_hack || '⚡ Fast elimination trick: check signs/test numbers.'}</Text>
                    </View>
                  )}
                </View>
              );
            })}
          </ScrollView>
        )}

        {/* TAB 3: 3D FLASHCARDS */}
        {activeTab === 'flashcards' && (
          <View style={styles.tabContainer}>
            <Text style={styles.screenHeading}>High-Yield Revision Flashcards</Text>
            <Text style={styles.screenSubtext}>Tap card to flip between formula recall and CBT shortcut.</Text>

            <TouchableOpacity
              style={styles.flashcardBox}
              activeOpacity={0.9}
              onPress={() => setFcFlipped(f => !f)}
            >
              {!fcFlipped ? (
                <View style={styles.fcContent}>
                  <Text style={styles.fcTag}>{flashcardsData[fcIndex]?.topic} • {flashcardsData[fcIndex]?.category}</Text>
                  <Text style={styles.fcFrontText}>{flashcardsData[fcIndex]?.front}</Text>
                  <Text style={styles.fcHint}>👆 Tap to reveal answer</Text>
                </View>
              ) : (
                <View style={styles.fcContent}>
                  <Text style={styles.fcTag}>{flashcardsData[fcIndex]?.title}</Text>
                  <Text style={styles.fcBackText}>{flashcardsData[fcIndex]?.back}</Text>
                  <Text style={styles.fcHint}>👆 Tap to flip back</Text>
                </View>
              )}
            </TouchableOpacity>

            <View style={styles.fcControls}>
              <TouchableOpacity
                style={styles.fcBtn}
                disabled={fcIndex === 0}
                onPress={() => { setFcIndex(i => i - 1); setFcFlipped(false); }}
              >
                <Text style={styles.fcBtnText}>← Previous</Text>
              </TouchableOpacity>

              <Text style={styles.fcCounter}>{fcIndex + 1} / {flashcardsData.length}</Text>

              <TouchableOpacity
                style={styles.fcBtn}
                disabled={fcIndex === flashcardsData.length - 1}
                onPress={() => { setFcIndex(i => i + 1); setFcFlipped(false); }}
              >
                <Text style={styles.fcBtnText}>Next →</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* TAB 4: MISTAKE VAULT */}
        {activeTab === 'vault' && (
          <ScrollView style={styles.tabContainer}>
            <Text style={styles.screenHeading}>Mistake Vault (Weakness Killer)</Text>
            <Text style={styles.screenSubtext}>
              {mistakeVault.length === 0
                ? 'Your Mistake Vault is clear! Any question you miss in CBT or Drills is saved here until you master it.'
                : `You have ${mistakeVault.length} tricky questions to clear to guarantee your Grade A.`}
            </Text>

            {mistakeVault.map((q, idx) => (
              <View key={q.id || idx} style={styles.drillCard}>
                <View style={styles.vaultHeader}>
                  <Text style={styles.topicBadge}>{q.topic}</Text>
                  <TouchableOpacity
                    onPress={() => setMistakeVault(v => v.filter(item => item.id !== q.id))}
                  >
                    <Text style={styles.resolvedBtn}>✓ Mark Mastered</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.drillPrompt}>{q.question}</Text>
                <View style={styles.solutionBox}>
                  <Text style={styles.solutionTitle}>Official Key: {q.answer}</Text>
                  <Text style={styles.speedHackText}>{q.speed_hack || q.explanation}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Bottom App Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navTabItem} onPress={() => setActiveTab('cbt')}>
          <Text style={[styles.navTabIcon, activeTab === 'cbt' && styles.navTabIconActive]}>🎯</Text>
          <Text style={[styles.navTabLabel, activeTab === 'cbt' && styles.navTabLabelActive]}>CBT Exam</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTabItem} onPress={() => setActiveTab('drills')}>
          <Text style={[styles.navTabIcon, activeTab === 'drills' && styles.navTabIconActive]}>📚</Text>
          <Text style={[styles.navTabLabel, activeTab === 'drills' && styles.navTabLabelActive]}>Drills</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTabItem} onPress={() => setActiveTab('flashcards')}>
          <Text style={[styles.navTabIcon, activeTab === 'flashcards' && styles.navTabIconActive]}>⚡</Text>
          <Text style={[styles.navTabLabel, activeTab === 'flashcards' && styles.navTabLabelActive]}>Cards</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navTabItem} onPress={() => setActiveTab('vault')}>
          <Text style={[styles.navTabIcon, activeTab === 'vault' && styles.navTabIconActive]}>🛡️</Text>
          <Text style={[styles.navTabLabel, activeTab === 'vault' && styles.navTabLabelActive]}>Vault</Text>
        </TouchableOpacity>
      </View>

      {/* Course Switcher Modal */}
      <Modal visible={courseModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Select 100L Course</Text>
            <Text style={styles.modalSub}>Federal University of Technology, Minna</Text>
            <ScrollView style={{ maxHeight: 380 }}>
              {COURSES.map(c => (
                <TouchableOpacity
                  key={c.code}
                  style={[styles.courseItem, selectedCourse === c.code && styles.courseItemActive]}
                  onPress={() => {
                    if (c.code === 'MAT 101') {
                      setSelectedCourse(c.code);
                      setCourseModalVisible(false);
                    } else {
                      Alert.alert(
                        `${c.code}: ${c.title}`,
                        `Curriculum is registered for 100L ${c.semester}. Practice questions and formula pack will be unlocked in the next package update.`
                      );
                    }
                  }}
                >
                  <View>
                    <Text style={styles.courseCode}>{c.code} • {c.semester}</Text>
                    <Text style={styles.courseName}>{c.title}</Text>
                  </View>
                  <Text style={[styles.courseStatus, c.count > 0 && styles.statusReady]}>{c.status}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.modalCloseBtn} onPress={() => setCourseModalVisible(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F19'
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)'
  },
  brandTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800'
  },
  brandSubtitle: {
    color: '#06B6D4',
    fontSize: 11,
    fontWeight: '600'
  },
  courseBadge: {
    backgroundColor: 'rgba(99, 102, 241, 0.2)',
    borderColor: '#6366F1',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },
  courseBadgeText: {
    color: '#A5B4FC',
    fontWeight: '700',
    fontSize: 12
  },
  body: {
    flex: 1
  },
  tabContainer: {
    flex: 1,
    padding: 16
  },
  screenHeading: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFF',
    marginBottom: 4
  },
  screenSubtext: {
    fontSize: 13,
    color: '#9CA3AF',
    marginBottom: 16
  },
  startCard: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: 20
  },
  specBox: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    padding: 14,
    marginVertical: 16
  },
  specItem: {
    color: '#CBD5E1',
    fontSize: 13,
    marginBottom: 6
  },
  primaryBtn: {
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  primaryBtnText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15
  },
  examContainer: {
    flex: 1
  },
  timerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111827',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  qIndicator: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 13
  },
  timerText: {
    color: '#06B6D4',
    fontWeight: '800',
    fontSize: 16
  },
  dangerTimer: {
    color: '#F43F5E'
  },
  submitBtn: {
    backgroundColor: 'rgba(244, 63, 94, 0.2)',
    borderWidth: 1,
    borderColor: '#F43F5E',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6
  },
  submitBtnText: {
    color: '#FDA4AF',
    fontSize: 12,
    fontWeight: '700'
  },
  qScroll: {
    flex: 1
  },
  qCard: {
    backgroundColor: '#111827',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12
  },
  topicBadge: {
    color: '#06B6D4',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 6
  },
  qText: {
    color: '#FFF',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500'
  },
  optionsBox: {
    gap: 8,
    marginBottom: 16
  },
  optItem: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  optSelected: {
    borderColor: '#6366F1',
    backgroundColor: 'rgba(99, 102, 241, 0.2)'
  },
  optCorrect: {
    borderColor: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.2)'
  },
  optWrong: {
    borderColor: '#F43F5E',
    backgroundColor: 'rgba(244, 63, 94, 0.2)'
  },
  optLetter: {
    color: '#A5B4FC',
    fontWeight: '800',
    marginRight: 10,
    fontSize: 14
  },
  optLetterSelected: {
    color: '#FFF'
  },
  optText: {
    color: '#E2E8F0',
    fontSize: 14,
    flex: 1
  },
  optTextSelected: {
    color: '#FFF',
    fontWeight: '600'
  },
  cbtBottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10
  },
  navArrowBtn: {
    backgroundColor: '#1F2937',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  btnDisabled: {
    opacity: 0.3
  },
  navArrowText: {
    color: '#FFF',
    fontWeight: '600'
  },
  resultContainer: {
    flex: 1
  },
  resultCard: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center'
  },
  resultHeading: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8
  },
  resultScore: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: '800',
    marginVertical: 12
  },
  gradeBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    fontWeight: '800',
    fontSize: 13,
    marginBottom: 12
  },
  gradeA: {
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    color: '#10B981'
  },
  gradeReview: {
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    color: '#F59E0B'
  },
  resultNote: {
    color: '#9CA3AF',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20
  },
  chipScroll: {
    flexDirection: 'row',
    marginBottom: 14
  },
  chip: {
    backgroundColor: '#111827',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)'
  },
  chipActive: {
    backgroundColor: '#6366F1',
    borderColor: '#6366F1'
  },
  chipText: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '600'
  },
  chipTextActive: {
    color: '#FFF'
  },
  drillCard: {
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)'
  },
  drillQNum: {
    color: '#06B6D4',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 4
  },
  drillPrompt: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20
  },
  solutionBox: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#6366F1',
    marginTop: 8
  },
  solutionTitle: {
    color: '#A5B4FC',
    fontWeight: '700',
    fontSize: 13,
    marginBottom: 4
  },
  speedHackText: {
    color: '#CBD5E1',
    fontSize: 12
  },
  flashcardBox: {
    height: 320,
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    marginVertical: 16
  },
  fcContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  fcTag: {
    color: '#06B6D4',
    fontSize: 11,
    fontWeight: '700'
  },
  fcFrontText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 26
  },
  fcBackText: {
    color: '#E2E8F0',
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 22,
    width: '100%'
  },
  fcHint: {
    color: '#6B7280',
    fontSize: 11
  },
  fcControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fcBtn: {
    backgroundColor: '#1F2937',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  fcBtnText: {
    color: '#FFF',
    fontWeight: '600'
  },
  fcCounter: {
    color: '#06B6D4',
    fontWeight: '700'
  },
  vaultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  resolvedBtn: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '700'
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#111827',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    paddingVertical: 8
  },
  navTabItem: {
    flex: 1,
    alignItems: 'center'
  },
  navTabIcon: {
    fontSize: 18,
    marginBottom: 2,
    opacity: 0.6
  },
  navTabIconActive: {
    opacity: 1
  },
  navTabLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600'
  },
  navTabLabelActive: {
    color: '#6366F1',
    fontWeight: '700'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    padding: 20
  },
  modalCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)'
  },
  modalTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800'
  },
  modalSub: {
    color: '#06B6D4',
    fontSize: 12,
    marginBottom: 16
  },
  courseItem: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  courseItemActive: {
    borderColor: '#6366F1',
    borderWidth: 1,
    backgroundColor: 'rgba(99, 102, 241, 0.15)'
  },
  courseCode: {
    color: '#A5B4FC',
    fontSize: 12,
    fontWeight: '700'
  },
  courseName: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600'
  },
  courseStatus: {
    color: '#9CA3AF',
    fontSize: 11
  },
  statusReady: {
    color: '#10B981',
    fontWeight: '700'
  },
  modalCloseBtn: {
    marginTop: 12,
    backgroundColor: '#1F2937',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  modalCloseText: {
    color: '#FFF',
    fontWeight: '700'
  }
});
