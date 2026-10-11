// FUTMINNA 100-Level Core Theory & High-Yield Concept Micro-Notes
// Formatted with standard KaTeX mathematical typesetting for offline-first mastery

window.THEORY_NOTES = {
  "MAT 101": [
    {
      topic: "Set Theory",
      readTime: "2 min",
      summary: "Foundations of collections, subset counting, set operations, and cardinality theorems.",
      concepts: [
        {
          title: "Sets, Subsets & Power Sets",
          body: "A set is a well-defined collection of distinct objects. A set $A$ is a subset of $B$ ($A \\subseteq B$) if every element of $A$ belongs to $B$. The power set $\\mathcal{P}(A)$ is the set of all subsets of $A$."
        },
        {
          title: "Counting Subsets & Proper Subsets",
          body: "For any finite set with $n$ distinct elements:<br>• Total number of subsets = $2^n$<br>• Total number of proper subsets ($A \\subset B, A \\neq B$) = $2^n - 1$<br>• Total non-empty proper subsets = $2^n - 2$."
        },
        {
          title: "Union, Intersection & De Morgan's Laws",
          body: "• Union $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$<br>• Intersection $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$<br>• De Morgan's First Law: $(A \\cup B)' = A' \\cap B'$<br>• De Morgan's Second Law: $(A \\cap B)' = A' \\cup B'$."
        }
      ],
      formulas: [
        {
          name: "Two-Set Inclusion-Exclusion",
          math: "n(A \\cup B) = n(A) + n(B) - n(A \\cap B)",
          tip: "In full universe surveys: $\\text{Both} = n(A) + n(B) - n(A \\cup B)$"
        },
        {
          name: "Three-Set Inclusion-Exclusion",
          math: "n(A \\cup B \\cup C) = n(A) + n(B) + n(C) - \\sum n(A \\cap B) + n(A \\cap B \\cap C)",
          tip: "Subtract all pairs of intersections, add the triple intersection back."
        }
      ],
      traps: [
        "Never confuse subsets ($2^n$) with proper subsets ($2^n - 1$). The null set $\\emptyset$ is a subset of every set, but the set itself is not a PROPER subset of itself.",
        "In percentage survey questions, if every student belongs to at least one group, $n(A \\cup B) = 100\\%$."
      ]
    },
    {
      topic: "Mapping & Functions",
      readTime: "2 min",
      summary: "Injective, surjective, and bijective mappings, composite functions, and analytical inverses.",
      concepts: [
        {
          title: "Function Classification",
          body: "A relation $f: X \\to Y$ is a function if every $x \\in X$ is mapped to exactly one $y \\in Y$.<br>• <strong>Injective (One-to-One):</strong> $f(a) = f(b) \\implies a = b$. Distinct inputs have distinct outputs.<br>• <strong>Surjective (Onto):</strong> $\\text{Range}(f) = \\text{Codomain}(Y)$. Every element in $Y$ is an image.<br>• <strong>Bijective:</strong> Both Injective AND Surjective."
        },
        {
          title: "Invertibility Condition",
          body: "A function $f: X \\to Y$ has an inverse $f^{-1}: Y \\to X$ <strong>if and only if</strong> $f$ is bijective (one-to-one and onto). If $f$ is not bijective, $f^{-1}$ does not exist."
        },
        {
          title: "Composition of Functions",
          body: "Given $f(x)$ and $g(x)$, $(f \\circ g)(x) = f(g(x))$. In general, function composition is associative but <strong>NOT commutative</strong>: $f \\circ g \\neq g \\circ f$."
        }
      ],
      formulas: [
        {
          name: "Linear Fractional Inverse Shortcut",
          math: "f(x) = \\frac{ax + b}{cx + d} \\implies f^{-1}(x) = \\frac{-dx + b}{cx - a}",
          tip: "Swap diagonal terms $a$ and $d$, and negate both signs!"
        },
        {
          name: "Direct Inverse Evaluation Hack",
          math: "f^{-1}(k) = x \\iff f(x) = k",
          tip: "Do NOT derive the full inverse formula to compute $f^{-1}(k)$; just set $f(x) = k$ and solve for $x$!"
        }
      ],
      traps: [
        "A function where multiple inputs yield the same output (e.g. $f(x) = x^2$ on $\\mathbb{R}$) is NOT injective and therefore NOT invertible over $\\mathbb{R}$.",
        "$(f \\circ g)^{-1} = g^{-1} \\circ f^{-1}$ (note the reversal of order!)."
      ]
    },
    {
      topic: "Complex Numbers",
      readTime: "3 min",
      summary: "Argand plane, powers of i, modulus, conjugates, polar representation, and De Moivre's theorem.",
      concepts: [
        {
          title: "Imaginary Unit & Cyclic Powers of i",
          body: "By definition, $i = \\sqrt{-1}$ and $i^2 = -1$. Powers of $i$ repeat every cycle of 4:<br>• $i^{4k} = 1$<br>• $i^{4k+1} = i$<br>• $i^{4k+2} = -1$<br>• $i^{4k+3} = -i$.<br>To evaluate $i^N$, divide $N$ by 4 and take the remainder $R$: $i^N = i^R$."
        },
        {
          title: "Modulus & Complex Conjugate",
          body: "For $z = x + iy$:<br>• Modulus $|z| = r = \\sqrt{x^2 + y^2}$ (distance from origin in Argand plane).<br>• Conjugate $\\bar{z} = x - iy$.<br>• Key identity: $z \\bar{z} = (x + iy)(x - iy) = x^2 + y^2 = |z|^2$."
        },
        {
          title: "Polar Form & De Moivre's Theorem",
          body: "Polar form: $z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$, where $r = |z|$ and $\\theta = \\text{Arg}(z)$.<br>De Moivre's Theorem states that for any integer $n$:<br>$$[r(\\cos\\theta + i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$$"
        }
      ],
      formulas: [
        {
          name: "Argument Quadrant Decision Matrix",
          math: "\\theta = \\begin{cases} \\alpha & (x>0, y>0) \\\\ 180^\\circ - \\alpha & (x<0, y>0) \\\\ 180^\\circ + \\alpha \\text{ or } -180^\\circ + \\alpha & (x<0, y<0) \\\\ -\\alpha \\text{ or } 360^\\circ - \\alpha & (x>0, y<0) \\end{cases}",
          tip: "Here $\\alpha = \\tan^{-1}|y/x|$. Always inspect signs of $x$ and $y$ first!"
        },
        {
          name: "Complex Division via Conjugate",
          math: "\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2} = \\frac{(x_1 + iy_1)(x_2 - iy_2)}{x_2^2 + y_2^2}",
          tip: "Multiply numerator and denominator by conjugate of denominator to make divisor purely real."
        }
      ],
      traps: [
        "Do NOT write $\\theta = \\tan^{-1}(y/x)$ without checking the signs of $x$ and $y$! If $x < 0$ and $y < 0$ (Quadrant III), $\\tan^{-1}(y/x)$ gives a positive angle in Quadrant I, which is WRONG by $180^\\circ$.",
        "Remember that $(1 + i)^2 = 2i$ and $(1 - i)^2 = -2i$. Use these to rapidly reduce higher powers like $(1 + i)^8 = (2i)^4 = 16$."
      ]
    },
    {
      topic: "Inequalities",
      readTime: "2 min",
      summary: "Linear and rational inequalities, interval sign testing, and absolute value inequalities.",
      concepts: [
        {
          title: "The Sign Reversal Golden Rule",
          body: "When multiplying or dividing both sides of an inequality by a <strong>negative number</strong>, the inequality symbol MUST reverse:<br>$$-ax < b \\iff x > -\\frac{b}{a}$$"
        },
        {
          title: "Rational Inequalities & Critical Numbers",
          body: "For $\\frac{P(x)}{Q(x)} \\ge 0$, NEVER cross-multiply $Q(x)$ across the inequality sign because $Q(x)$ could be negative! Instead:<br>1. Set $P(x) = 0$ and $Q(x) = 0$ to identify all critical values.<br>2. Plot critical values on a number line to divide into test intervals.<br>3. Test sample points in each interval.<br>4. Denominator critical roots ($Q(x) = 0$) are ALWAYS strictly excluded (open circle, round parenthesis)."
        },
        {
          title: "Absolute Value Inequalities",
          body: "• $|x| \\le a \\iff -a \\le x \\le a$ (Closed bounded sandwich interval).<br>• $|x| \\ge a \\iff x \\le -a \\text{ or } x \\ge a$ (Disjoint outer wings)."
        }
      ],
      formulas: [
        {
          name: "Linear Absolute Inequality",
          math: "|ax + b| \\le c \\iff -c \\le ax + b \\le c",
          tip: "Subtract $b$, then divide by $a$ across all three sides."
        },
        {
          name: "CBT Option Elimination Hack",
          math: "\\text{Substitute } x = 0 \\text{ or } x = 100",
          tip: "Plug $x = 0$ into the question. If it fails, eliminate all options containing 0!"
        }
      ],
      traps: [
        "Never cross multiply by variables without knowing their sign: $\\frac{1}{x} < 2$ does NOT mean $1 < 2x$ (fails when $x < 0$).",
        "Denominator roots can never have $\\le$ or $\\ge$ brackets; division by zero is undefined."
      ]
    },
    {
      topic: "Surds & Radicals",
      readTime: "2 min",
      summary: "Properties of radicals, conjugate rationalization, and square roots of binomial surds.",
      concepts: [
        {
          title: "Surds Definition & Rules",
          body: "A surd is an irrational root of a rational number.<br>• $\\sqrt{ab} = \\sqrt{a}\\sqrt{b}$ (for $a, b \\ge 0$).<br>• $\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$.<br>• $\\sqrt{a} + \\sqrt{b} \\neq \\sqrt{a + b}$ (never combine under one radical!)."
        },
        {
          title: "Rationalizing with Conjugates",
          body: "The conjugate of $(\\sqrt{a} + \\sqrt{b})$ is $(\\sqrt{a} - \\sqrt{b})$. Multiplying a binomial surd by its conjugate yields a rational difference of squares:<br>$$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = (\\sqrt{a})^2 - (\\sqrt{b})^2 = a - b$$"
        }
      ],
      formulas: [
        {
          name: "Square Root of Binomial Surd",
          math: "\\sqrt{A \\pm \\sqrt{B}} = \\sqrt{x} \\pm \\sqrt{y} \\quad \\text{where } x + y = A, \\; xy = \\frac{B}{4}",
          tip: "Find two numbers whose sum is $A$ and product is $B/4$."
        },
        {
          name: "CBT Option Squaring Trick",
          math: "(\\text{Option})^2 = A \\pm \\sqrt{B}",
          tip: "Instead of deriving square roots of surds, square each multiple-choice option!"
        }
      ],
      traps: [
        "Do not forget to distribute signs when rationalizing numerators with multiple terms.",
        "Always ensure surds are in simplest reduced form (e.g. $\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3}$)."
      ]
    },
    {
      topic: "Indices & Logarithms",
      readTime: "2 min",
      summary: "Exponential laws, logarithmic identities, change of base theorem, and indicial equations.",
      concepts: [
        {
          title: "Fundamental Laws of Indices",
          body: "• $a^m \\times a^n = a^{m+n}$<br>• $\\frac{a^m}{a^n} = a^{m-n}$<br>• $(a^m)^n = a^{mn}$<br>• $a^0 = 1$ (for $a \\neq 0$)<br>• $a^{-n} = \\frac{1}{a^n}$<br>• $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$."
        },
        {
          title: "Logarithmic Equivalence & Laws",
          body: "By definition, $\\log_b(x) = y \\iff b^y = x$ (where $b > 0, b \\neq 1, x > 0$).<br>• $\\log_b(xy) = \\log_b(x) + \\log_b(y)$<br>• $\\log_b(x/y) = \\log_b(x) - \\log_b(y)$<br>• $\\log_b(x^k) = k\\log_b(x)$<br>• $\\log_b(b) = 1$ and $\\log_b(1) = 0$."
        }
      ],
      formulas: [
        {
          name: "Change of Base Formula",
          math: "\\log_b(a) = \\frac{\\log_c(a)}{\\log_c(b)} = \\frac{1}{\\log_a(b)}",
          tip: "Allows evaluating logarithms in any convenient base (typically base 10 or $e$)."
        },
        {
          name: "Indicial Substitution",
          math: "a^{2x} + p a^x + q = 0 \\implies y^2 + py + q = 0 \\quad (y = a^x)",
          tip: "Substitute $y = a^x$, solve quadratic, then take logarithms."
        }
      ],
      traps: [
        "$\\log(x + y) \\neq \\log x + \\log y$! Logarithm of a sum cannot be expanded.",
        "Logarithms of negative numbers and zero are undefined in real arithmetic."
      ]
    },
    {
      topic: "Mathematical Induction",
      readTime: "2 min",
      summary: "Principle of mathematical induction, base step, inductive hypothesis, and summation formulas.",
      concepts: [
        {
          title: "The Three Steps of Mathematical Induction",
          body: "To prove a proposition $P(n)$ is true for all integers $n \\ge 1$:<br>1. <strong>Base Step:</strong> Show $P(1)$ is true.<br>2. <strong>Inductive Hypothesis:</strong> Assume $P(k)$ is true for some arbitrary positive integer $k$.<br>3. <strong>Inductive Step:</strong> Prove that $P(k+1)$ must also be true based on the hypothesis.<br>By induction, $P(n)$ holds for all $n \\in \\mathbb{N}$."
        }
      ],
      formulas: [
        {
          name: "Standard Summation Formulas",
          math: "\\sum_{r=1}^n r = \\frac{n(n+1)}{2}, \\quad \\sum_{r=1}^n r^2 = \\frac{n(n+1)(2n+1)}{6}, \\quad \\sum_{r=1}^n r^3 = \\left[\\frac{n(n+1)}{2}\\right]^2",
          tip: "Notice that $\\sum r^3 = (\\sum r)^2$."
        },
        {
          name: "CBT 5-Second Testing Hack",
          math: "\\text{Evaluate LHS for } n = 1 \\text{ and } n = 2",
          tip: "Do NOT write full inductive proofs in CBT exams! Substitute $n = 1$ and $n = 2$ directly into the multiple-choice options."
        }
      ],
      traps: [
        "In divisibility induction problems (e.g. $7^n - 1$ divisible by 6), test $n = 1$: $7^1 - 1 = 6$ (divisible by 6).",
        "Remember that the base step does not always start at $n=1$; if question states $n \\ge 4$, your base step is $n = 4$."
      ]
    },
    {
      topic: "Binomial Expansion",
      readTime: "2 min",
      summary: "Binomial theorem for positive integral index, general term, and coefficient sum shortcut.",
      concepts: [
        {
          title: "The Binomial Theorem",
          body: "For any positive integer $n$:<br>$$(a + b)^n = \\sum_{r=0}^n \\binom{n}{r} a^{n-r} b^r = \\binom{n}{0}a^n + \\binom{n}{1}a^{n-1}b + \\dots + \\binom{n}{n}b^n$$<br>The expansion contains exactly $(n + 1)$ terms."
        },
        {
          title: "Binomial Coefficients",
          body: "$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$. Key symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$ and $\\binom{n}{0} = \\binom{n}{n} = 1$."
        }
      ],
      formulas: [
        {
          name: "General Term Formula",
          math: "T_{r+1} = \\binom{n}{r} a^{n-r} b^r",
          tip: "To find the 5th term, set $r = 4$. Term index is always one greater than $r$!"
        },
        {
          name: "Term Independent of x",
          math: "x^{\\text{power}} = x^0 \\implies \\text{Equate net exponent to } 0",
          tip: "Collect all powers of $x$ in $T_{r+1}$ and solve for $r$ such that exponent equals 0."
        },
        {
          name: "Sum of All Coefficients Hack",
          math: "\\text{Sum of Coefficients} = (a + b)^n \\Big|_{a=1, b=1} = 2^n",
          tip: "Substitute all variable letters equal to 1! E.g. Sum of coefficients of $(2x - 3y)^5 = (2(1) - 3(1))^5 = (-1)^5 = -1$."
        }
      ],
      traps: [
        "Watch negative signs carefully! In $(a - 2b)^n$, the second term $b$ carries the negative sign: $(-2b)^r$.",
        "Remember $r$ starts at 0, so the $k$-th term has $r = k - 1$."
      ]
    },
    {
      topic: "Matrices & Determinants",
      readTime: "3 min",
      summary: "Matrix multiplication rules, determinants of 2x2 and 3x3 matrices, inverses, and Cramer's rule.",
      concepts: [
        {
          title: "Matrix Orders & Multiplication",
          body: "Two matrices $A$ ($m \\times n$) and $B$ ($p \\times q$) can be multiplied to form $AB$ <strong>if and only if</strong> columns of $A$ equal rows of $B$ ($n = p$). The product matrix has order $m \\times q$."
        },
        {
          title: "Singular vs Non-Singular Matrices",
          body: "• A square matrix $A$ is <strong>singular</strong> if $\\det(A) = |A| = 0$. Singular matrices have NO inverse.<br>• A matrix is <strong>non-singular</strong> if $\\det(A) \\neq 0$. An inverse $A^{-1}$ exists if and only if $\\det(A) \\neq 0$."
        }
      ],
      formulas: [
        {
          name: "2x2 Determinant & Inverse",
          math: "A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies \\det A = ad - bc, \\quad A^{-1} = \\frac{1}{ad - bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
          tip: "Swap diagonal elements $a$ and $d$; negate off-diagonal elements $b$ and $c$."
        },
        {
          name: "Determinant Properties",
          math: "\\det(AB) = \\det(A)\\det(B), \\quad \\det(A^T) = \\det(A), \\quad \\det(kA) = k^n \\det(A)",
          tip: "For an $n \\times n$ matrix, factoring scalar $k$ out raises it to the power $n$!"
        }
      ],
      traps: [
        "Matrix multiplication is NOT commutative in general: $AB \\neq BA$.",
        "For a $3 \\times 3$ matrix, $\\det(2A) = 2^3 \\det(A) = 8 \\det(A)$, NOT $2\\det(A)$!"
      ]
    },
    {
      topic: "Quadratic Equations",
      readTime: "2 min",
      summary: "Roots of quadratics, discriminant conditions, and symmetric functions of roots.",
      concepts: [
        {
          title: "Standard Form & Nature of Roots",
          body: "For $ax^2 + bx + c = 0$ ($a \\neq 0$), the discriminant is $\\Delta = b^2 - 4ac$:<br>• $\\Delta > 0$: Two distinct real roots.<br>• $\\Delta = 0$: Two equal (repeated) real roots (tangent to x-axis).<br>• $\\Delta < 0$: Two complex conjugate roots (no real x-intercepts).<br>• $\\Delta$ is a perfect square: Rational roots."
        }
      ],
      formulas: [
        {
          name: "Sum and Product of Roots (Vieta's Formulas)",
          math: "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}",
          tip: "Equation from roots: $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$."
        },
        {
          name: "Symmetric Functions of Roots",
          math: "\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta, \\quad \\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta}",
          tip: "Always express in terms of $(\\alpha+\\beta)$ and $\\alpha\\beta$."
        }
      ],
      traps: [
        "Do not forget the negative sign in the sum of roots: $\\alpha + \\beta = -b/a$.",
        "If an equation has reciprocal roots ($\\beta = 1/\\alpha$), then $\\alpha\\beta = 1 \\implies c/a = 1 \\implies a = c$."
      ]
    }
  ],

  "PHY 101": [
    {
      topic: "Units & Dimensions",
      readTime: "2 min",
      summary: "SI base dimensions, derived physical quantities, and the principle of dimensional homogeneity.",
      concepts: [
        {
          title: "Fundamental SI Dimensions",
          body: "Mechanics uses three base dimensions: Mass $[M]$, Length $[L]$, and Time $[T]$. Temperature is $[\\theta]$ or $[K]$, Electric Current is $[I]$ or $[A]$."
        },
        {
          title: "Principle of Dimensional Homogeneity",
          body: "In any physically valid equation $A = B + C$:<br>1. All terms added, subtracted, or equated must have identical dimensional formulas: $[A] = [B] = [C]$.<br>2. Arguments of trigonometric, exponential, and logarithmic functions must be <strong>dimensionless</strong> ($[M^0L^0T^0]$)."
        }
      ],
      formulas: [
        {
          name: "High-Yield Dimension Table",
          math: "\\begin{aligned} \\text{Force / Weight} &: [MLT^{-2}] \\\\ \\text{Work / Energy / Torque} &: [ML^2T^{-2}] \\\\ \\text{Power} &: [ML^2T^{-3}] \\\\ \\text{Pressure / Stress / Young's Modulus} &: [ML^{-1}T^{-2}] \\\\ \\text{Surface Tension} &: [MT^{-2}] \\\\ \\text{Viscosity } (\\eta) &: [ML^{-1}T^{-1}] \\end{aligned}",
          tip: "Notice Work, Energy, and Torque have identical dimensions $[ML^2T^{-2}]$!"
        }
      ],
      traps: [
        "Angle and strain are dimensionless ratios, but angle still has SI unit (radians).",
        "Frequency and angular velocity have dimension $[T^{-1}]$, but different physical interpretations."
      ]
    },
    {
      topic: "Vectors & Coordinates",
      readTime: "2 min",
      summary: "Vector resolution, dot and cross products, and resultant magnitude and direction.",
      concepts: [
        {
          title: "Vector Resolution into Components",
          body: "A vector $\\mathbf{A}$ inclined at angle $\\theta$ to the horizontal resolves into:<br>• Horizontal component: $A_x = A\\cos\\theta$<br>• Vertical component: $A_y = A\\sin\\theta$<br>• Magnitude: $A = \\sqrt{A_x^2 + A_y^2}$, Direction: $\\theta = \\tan^{-1}(A_y / A_x)$."
        },
        {
          title: "Dot (Scalar) vs Cross (Vector) Product",
          body: "• Dot Product: $\\mathbf{A} \\cdot \\mathbf{B} = AB\\cos\\theta$ (produces a scalar). Two vectors are perpendicular if $\\mathbf{A} \\cdot \\mathbf{B} = 0$.<br>• Cross Product: $|\\mathbf{A} \\times \\mathbf{B}| = AB\\sin\\theta$ (produces a vector perpendicular to both). Two vectors are parallel if $\\mathbf{A} \\times \\mathbf{B} = \\mathbf{0}$."
        }
      ],
      formulas: [
        {
          name: "Resultant of Two Vectors",
          math: "R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}",
          tip: "Max when $\\theta = 0^\\circ$ ($R = A+B$); Min when $\\theta = 180^\\circ$ ($R = |A-B|$); Perpendicular when $\\theta = 90^\\circ$ ($R = \\sqrt{A^2+B^2}$)."
        }
      ],
      traps: [
        "In unit vectors: $\\mathbf{i} \\cdot \\mathbf{i} = 1$, but $\\mathbf{i} \\times \\mathbf{i} = \\mathbf{0}$. Conversely, $\\mathbf{i} \\cdot \\mathbf{j} = 0$, but $\\mathbf{i} \\times \\mathbf{j} = \\mathbf{k}$."
      ]
    },
    {
      topic: "Kinematics & Motion",
      readTime: "2 min",
      summary: "Equations of uniformly accelerated motion, free fall, and projectile trajectories.",
      concepts: [
        {
          title: "Equations of Uniform Acceleration",
          body: "Valid only when acceleration $a$ is constant:<br>1. $v = u + at$<br>2. $s = ut + \\frac{1}{2}at^2$<br>3. $v^2 = u^2 + 2as$<br>4. $s = \\left(\\frac{u + v}{2}\\right)t$."
        },
        {
          title: "Projectile Motion Principles",
          body: "Horizontal and vertical motions are completely independent:<br>• Horizontal: Constant velocity $u_x = u\\cos\\theta$ ($a_x = 0$).<br>• Vertical: Uniform acceleration under gravity $a_y = -g$ ($u_y = u\\sin\\theta$)."
        }
      ],
      formulas: [
        {
          name: "Projectile Key Parameters",
          math: "T = \\frac{2u\\sin\\theta}{g}, \\quad H = \\frac{u^2\\sin^2\\theta}{2g}, \\quad R = \\frac{u^2\\sin 2\\theta}{g}",
          tip: "Maximum range occurs at release angle $\\theta = 45^\\circ$, giving $R_{\\max} = \\frac{u^2}{g}$."
        }
      ],
      traps: [
        "At the maximum height of a projectile, velocity is NOT zero! The vertical velocity $v_y = 0$, but horizontal velocity remains $u\\cos\\theta$."
      ]
    },
    {
      topic: "Dynamics & Momentum",
      readTime: "2 min",
      summary: "Newton's laws, impulse-momentum theorem, and conservation of linear momentum.",
      concepts: [
        {
          title: "Newton's Laws of Motion",
          body: "• <strong>First Law (Inertia):</strong> A body remains at rest or uniform velocity unless acted upon by a net external force. Inertia is measured solely by mass.<br>• <strong>Second Law:</strong> $\\mathbf{F}_{net} = \\frac{d\\mathbf{p}}{dt} = m\\mathbf{a}$.<br>• <strong>Third Law:</strong> Every action has an equal and opposite reaction acting on <i>different bodies</i>."
        },
        {
          title: "Conservation of Linear Momentum",
          body: "In any isolated system with zero net external force:<br>$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$<br>• Elastic collision: Both momentum and kinetic energy are conserved.<br>• Inelastic collision: Momentum is conserved, but kinetic energy is lost."
        }
      ],
      formulas: [
        {
          name: "Impulse-Momentum Theorem",
          math: "J = F \\Delta t = \\Delta p = m(v - u)",
          tip: "Impulse equals the change in momentum. Units: $\\text{N}\\cdot\\text{s}$ or $\\text{kg}\\cdot\\text{m/s}$."
        }
      ],
      traps: [
        "Action and reaction forces never cancel each other because they act on two different bodies!"
      ]
    },
    {
      topic: "Space-Time & Relativity",
      readTime: "2 min",
      summary: "Einstein's postulates of special relativity, Lorentz factor, time dilation, and length contraction.",
      concepts: [
        {
          title: "Einstein's Postulates",
          body: "1. <strong>Principle of Relativity:</strong> The laws of physics are identical in all inertial reference frames.<br>2. <strong>Constancy of Light:</strong> The speed of light in vacuum $c = 3 \\times 10^8 \\text{ m/s}$ is constant for all observers regardless of relative motion."
        }
      ],
      formulas: [
        {
          name: "Lorentz Factor & Relativistic Effects",
          math: "\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}, \\quad t = \\gamma t_0, \\quad L = \\frac{L_0}{\\gamma}, \\quad E = mc^2",
          tip: "Since $\\gamma > 1$ for $v > 0$: Moving clocks tick slower ($t > t_0$), moving rods contract ($L < L_0$)."
        }
      ],
      traps: [
        "Length contraction occurs ONLY along the direction of motion; transverse dimensions remain unaffected."
      ]
    }
  ],

  "CHM 111": [
    {
      topic: "Thermodynamics",
      readTime: "2 min",
      summary: "First and second laws of thermodynamics, enthalpy, entropy, and Gibbs free energy.",
      concepts: [
        {
          title: "State Functions & First Law",
          body: "State functions depend only on current state, not the pathway taken (e.g. $U, H, S, G, P, V, T$). Work $w$ and heat $q$ are path functions.<br>• First Law: $\\Delta U = q + w$ ($w = -P\\Delta V$ for gas expansion)."
        },
        {
          title: "Gibbs Free Energy & Spontaneity",
          body: "At constant temperature and pressure:<br>$$\\Delta G = \\Delta H - T\\Delta S$$<br>• $\\Delta G < 0$: <strong>Spontaneous</strong> process (exergonic).<br>• $\\Delta G = 0$: System is in <strong>dynamic equilibrium</strong>.<br>• $\\Delta G > 0$: <strong>Non-spontaneous</strong> process (endergonic)."
        }
      ],
      formulas: [
        {
          name: "Equilibrium Temperature Formula",
          math: "T_{\\text{eq}} = \\frac{\\Delta H}{\\Delta S}",
          tip: "At equilibrium, $\\Delta G = 0 \\implies T_{\\text{eq}} = \\Delta H / \\Delta S$ (ensure $\\Delta H$ and $\\Delta S$ use consistent units: J or kJ!)."
        }
      ],
      traps: [
        "Always convert $\\Delta H$ from $\\text{kJ}$ to $\\text{J}$ (multiply by 1000) when combining with $\\Delta S$ in $\\text{J}/(\\text{mol}\\cdot\\text{K})$."
      ]
    },
    {
      topic: "Chemical Equilibrium",
      readTime: "2 min",
      summary: "Equilibrium constants, relationship between Kp and Kc, and Le Chatelier's principle.",
      concepts: [
        {
          title: "Equilibrium Constant Expressions",
          body: "For $aA + bB \\rightleftharpoons cC + dD$ in gaseous phase:<br>$$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}, \\quad K_p = K_c(RT)^{\\Delta n_g}$$<br>where $\\Delta n_g = (c + d) - (a + b)$ (moles of gaseous products minus gaseous reactants). Pure solids and liquids are omitted."
        },
        {
          title: "Le Chatelier's Principle",
          body: "If a dynamic equilibrium is disturbed, the system shifts in the direction that counteracts the disturbance:<br>• Increase Pressure: Shifts to side with <strong>fewer gas moles</strong>.<br>• Increase Temperature: Shifts in the <strong>endothermic direction</strong> (absorbs heat).<br>• Add Catalyst: Increases forward and reverse rates equally; has <strong>ZERO effect on $K$</strong> or equilibrium composition!"
        }
      ],
      formulas: [
        {
          name: "Standard Free Energy & Equilibrium",
          math: "\\Delta G^\\circ = -RT \\ln K",
          tip: "If $K > 1$, $\\Delta G^\\circ < 0$ (products favored). If $K < 1$, $\\Delta G^\\circ > 0$ (reactants favored)."
        }
      ],
      traps: [
        "Temperature is the ONLY factor that alters the numerical value of the equilibrium constant $K$! Pressure, concentration, and catalysts never change $K$."
      ]
    },
    {
      topic: "Chemical Kinetics",
      readTime: "2 min",
      summary: "Reaction rates, orders of reaction, integrated rate laws, and the Arrhenius equation.",
      concepts: [
        {
          title: "Rate Law & Reaction Order",
          body: "Rate $= k[A]^m [B]^n$. The overall order is $m + n$. Reaction orders must be determined experimentally and are NOT necessarily equal to stoichiometric coefficients."
        },
        {
          title: "Arrhenius Equation & Activation Energy",
          body: "Rate constant $k$ increases exponentially with temperature:<br>$$k = A e^{-E_a / RT} \\iff \\ln k = \\ln A - \\frac{E_a}{RT}$$<br>Plotting $\\ln k$ versus $1/T$ yields a straight line with slope $= -E_a / R$."
        }
      ],
      formulas: [
        {
          name: "Two-Temperature Arrhenius Form",
          math: "\\ln\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)",
          tip: "Use $R = 8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})$ and ensure temperatures are in Kelvin ($T = {}^\\circ\\text{C} + 273$)."
        },
        {
          name: "First Order Half-Life",
          math: "t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0.693}{k}",
          tip: "First order half-life is completely independent of initial reactant concentration $[A]_0$."
        }
      ],
      traps: [
        "Zero-order rate constant has units $\\text{mol}\\cdot\\text{dm}^{-3}\\text{s}^{-1}$, while first-order has units $\\text{s}^{-1}$."
      ]
    },
    {
      topic: "Acids, Bases & Buffers",
      readTime: "2 min",
      summary: "pH scale, ionic product of water, buffer solutions, and Henderson-Hasselbalch equation.",
      concepts: [
        {
          title: "The pH Scale & Water Dissociation",
          body: "• $\\text{pH} = -\\log[H^+]$ and $\\text{pOH} = -\\log[OH^-]$.<br>• At $25^\\circ\\text{C}$, $K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$, so $\\text{pH} + \\text{pOH} = 14$."
        },
        {
          title: "Buffer Solutions",
          body: "A buffer solution resists pH change upon addition of small amounts of acid or base. Consists of a weak acid and its conjugate base salt, or a weak base and its conjugate acid salt."
        }
      ],
      formulas: [
        {
          name: "Henderson-Hasselbalch Equation",
          math: "\\text{pH} = \\text{p}K_a + \\log\\frac{[\\text{Conjugate Base}]}{[\\text{Weak Acid}]}",
          tip: "Maximum buffer capacity occurs when $[\\text{Base}] = [\\text{Acid}]$, which implies $\\text{pH} = \\text{p}K_a$."
        }
      ],
      traps: [
        "Strong acids/bases completely dissociate in water, so $[H^+] = C_a$ for monoprotic strong acids like $\\text{HCl}$."
      ]
    }
  ],

  "CHM 191": [
    {
      topic: "Volumetric Analysis",
      readTime: "2 min",
      summary: "Titration principles, titrant vs analyte, stoichiometric calculations, and standard solutions.",
      concepts: [
        {
          title: "Core Titration Terminology",
          body: "• <strong>Titrant:</strong> Standard solution of known concentration, loaded into the <strong>burette</strong>.<br>• <strong>Titrand (Analyte):</strong> Solution of unknown concentration, accurately pipetted into the <strong>conical flask</strong>.<br>• <strong>Equivalence Point:</strong> Theoretical stoichiometric completion point.<br>• <strong>Endpoint:</strong> Experimental point where the indicator changes color."
        }
      ],
      formulas: [
        {
          name: "Fundamental Volumetric Formula",
          math: "\\frac{C_a V_a}{n_a} = \\frac{C_b V_b}{n_b}",
          tip: "$C_a, C_b$: molarities; $V_a, V_b$: volumes in $\\text{cm}^3$; $n_a, n_b$: stoichiometric reaction mole ratios."
        },
        {
          name: "Mass Concentration Conversion",
          math: "\\text{Mass Concentration } (\\text{g/dm}^3) = \\text{Molarity } (\\text{mol/dm}^3) \\times \\text{Molar Mass } (\\text{g/mol})",
          tip: "Remember $1 \\text{ dm}^3 = 1000 \\text{ cm}^3$."
        }
      ],
      traps: [
        "Never rinse the conical flask with the solution it will contain! Rinse only with distilled water to preserve the exact pipetted mole count."
      ]
    },
    {
      topic: "Primary Standards",
      readTime: "2 min",
      summary: "Criteria for primary standards, weighing accuracy, and secondary standard examples.",
      concepts: [
        {
          title: "Characteristics of an Ideal Primary Standard",
          body: "1. Extremely high purity ($\\ge 99.9\\%$).<br>2. High molar mass to minimize percentage weighing errors.<br>3. Non-hygroscopic (does not absorb moisture from air).<br>4. Stable in air and room temperature.<br>5. High solubility in titration solvent.<br>• Examples: Anhydrous $\\text{Na}_2\\text{CO}_3$, Potassium Hydrogen Phthalate (KHP), Oxalic acid."
        },
        {
          title: "Secondary Standards",
          body: "Substances whose concentrations cannot be accurately prepared by direct weighing and must be standardized against a primary standard.<br>• $\\text{NaOH}$: Absorbs atmospheric moisture and $\\text{CO}_2$ (hygroscopic/deliquescent).<br>• $\\text{HCl}$: Volatile acid; fumes escape."
        }
      ],
      formulas: [],
      traps: [
        "$\\text{NaOH}$ and $\\text{HCl}$ are NEVER primary standards in FUTMINNA practical chemistry!"
      ]
    },
    {
      topic: "Indicator Selection",
      readTime: "2 min",
      summary: "Indicator pH transition intervals, equivalence pH determination, and color transitions.",
      concepts: [
        {
          title: "Indicator Selection Rules",
          body: "The indicator's pH transition range must encompass the vertical equivalence pH jump:<br>• <strong>Strong Acid + Strong Base:</strong> Methyl Orange (pH 3.1–4.4) OR Phenolphthalein (pH 8.3–10.0).<br>• <strong>Strong Acid + Weak Base:</strong> Methyl Orange (acidic equivalence point $\\text{pH} \\approx 3.8$, Red to Orange/Yellow).<br>• <strong>Weak Acid + Strong Base:</strong> Phenolphthalein (alkaline equivalence point $\\text{pH} \\approx 8.7$, Colorless to Pink).<br>• <strong>Weak Acid + Weak Base:</strong> NO indicator works; pH curve lacks a sharp vertical jump."
        }
      ],
      formulas: [],
      traps: [
        "In titrating $\\text{Na}_2\\text{CO}_3$ (weak base) with $\\text{HCl}$ (strong acid), use Methyl Orange, NOT Phenolphthalein!"
      ]
    },
    {
      topic: "Lab Techniques & Meniscus",
      readTime: "2 min",
      summary: "Parallax error elimination, concave vs convex meniscus reading, and washing protocols.",
      concepts: [
        {
          title: "Reading the Meniscus",
          body: "• <strong>Clear/Transparent liquids (Water, Acid, Base):</strong> Read the <strong>BOTTOM</strong> of the concave meniscus at eye level.<br>• <strong>Dark/Opaque liquids ($\\text{KMnO}_4$):</strong> Read the <strong>TOP</strong> of the meniscus.<br>• <strong>Eliminating Parallax:</strong> The observer's eye must be strictly in the horizontal plane of the graduation mark."
        },
        {
          title: "Rinsing Protocols",
          body: "• Burette: Rinse with distilled water, then with the titrant.<br>• Pipette: Rinse with distilled water, then with the solution to be pipetted.<br>• Conical flask: Rinse with <strong>distilled water ONLY</strong> (never with the solution!)."
        }
      ],
      formulas: [],
      traps: [
        "Do NOT blow out the last drop remaining in the tip of a volumetric pipette; pipettes are calibrated to retain that drop by surface tension!"
      ]
    }
  ]
};
