window.MAT101_FLASHCARDS = [
  {
    "id": "FC_SET_01",
    "topic": "SET THEORY",
    "title": "Two-Set Overlap Formula",
    "front": "What is the formula for the number of elements in the union of two sets A and B?",
    "back": "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)\n\n⚡ Speed Hack: If all elements belong to at least one set, Both = Set1 + Set2 - Total.",
    "category": "Formulas"
  },
  {
    "id": "FC_SET_02",
    "topic": "SET THEORY",
    "title": "Number of Subsets & Proper Subsets",
    "front": "For a set with n elements, how many subsets and proper subsets does it have?",
    "back": "• Total Subsets = 2^n\n• Proper Subsets = 2^n - 1\n• Non-empty Proper Subsets = 2^n - 2",
    "category": "Formulas"
  },
  {
    "id": "FC_SET_03",
    "topic": "SET THEORY",
    "title": "De Morgan's Laws",
    "front": "State De Morgan's Laws for set operations.",
    "back": "1. (A ∪ B)' = A' ∩ B'\n2. (A ∩ B)' = A' ∪ B'\n\n\"The complement of union is the intersection of complements.\"",
    "category": "Identities"
  },
  {
    "id": "FC_MAP_01",
    "topic": "MAPPING AND FUNCTION",
    "title": "Injective vs Surjective vs Bijective",
    "front": "Define Injective, Surjective, and Bijective functions and their invertibility condition.",
    "back": "• Injective (1-to-1): f(a) = f(b) ⇒ a = b (no two inputs share same output).\n• Surjective (Onto): Range = Codomain (every target element is reached).\n• Bijective: Both Injective & Surjective.\n\n⚡ A function has an inverse f^(-1) IF AND ONLY IF it is Bijective!",
    "category": "Concepts"
  },
  {
    "id": "FC_MAP_02",
    "topic": "MAPPING AND FUNCTION",
    "title": "Linear Fractional Inverse Shortcut",
    "front": "What is the fast inverse formula for f(x) = (ax + b) / (cx + d)?",
    "back": "f^(-1)(x) = (-dx + b) / (cx - a)\n\n⚡ Speed Hack: Simply swap diagonal elements a and d, and flip their signs!",
    "category": "Speed Hacks"
  },
  {
    "id": "FC_CPX_01",
    "topic": "COMPLEX NUMBER",
    "title": "Cyclic Powers of i (Imaginary Unit)",
    "front": "How do you evaluate high powers of i (e.g., i^75 or i^2024)?",
    "back": "Powers cycle modulo 4:\n• i^0 = 1\n• i^1 = i\n• i^2 = -1\n• i^3 = -i\n\n⚡ Rule: Divide exponent by 4; the remainder is the equivalent power.\nExample: 75 ÷ 4 = 18 rem 3 ⇒ i^75 = i^3 = -i.",
    "category": "Rules"
  },
  {
    "id": "FC_CPX_02",
    "topic": "COMPLEX NUMBER",
    "title": "Modulus and Conjugate Product",
    "front": "For Z = x + jy, what is |Z| and Z * Z_bar?",
    "back": "• Modulus: |Z| = √(x² + y²)\n• Conjugate: Z_bar = x - jy\n• Product: Z * Z_bar = x² + y² = |Z|²\n\n⚡ Never expand brackets with i for Z*Z_bar! Directly compute x² + y².",
    "category": "Formulas"
  },
  {
    "id": "FC_CPX_03",
    "topic": "COMPLEX NUMBER",
    "title": "Argument (θ) Quadrant Rules",
    "front": "How do you determine the argument θ of Z = x + jy based on quadrants?",
    "back": "Let α = arctan(|y/x|):\n• Quadrant I (+, +): θ = α\n• Quadrant II (-, +): θ = 180° - α\n• Quadrant III (-, -): θ = -180° + α (or 180° + α)\n• Quadrant IV (+, -): θ = -α (or 360° - α)",
    "category": "Rules"
  },
  {
    "id": "FC_CPX_04",
    "topic": "COMPLEX NUMBER",
    "title": "De Moivre's Theorem",
    "front": "State De Moivre's Theorem for complex numbers in polar form.",
    "back": "[r(cos θ + i sin θ)]^n = r^n (cos(nθ) + i sin(nθ))\n\nUseful for finding integer powers and roots of complex numbers.",
    "category": "Theorems"
  },
  {
    "id": "FC_INE_01",
    "topic": "INEQUALITY",
    "title": "Golden Rule of Inequalities",
    "front": "What happens when you multiply or divide an inequality by a negative number?",
    "back": "The inequality sign MUST REVERSE!\n\nExample: -3x < 12 ⇒ divide by -3 ⇒ x > -4.\n\n⚠️ Trap: Never cross-multiply by an expression containing x without knowing its sign!",
    "category": "Rules"
  },
  {
    "id": "FC_INE_02",
    "topic": "INEQUALITY",
    "title": "Absolute Value Inequalities",
    "front": "How do you solve |x| < a and |x| > a for a > 0?",
    "back": "• |x| < a  ⟺  -a < x < a (Continuous interval / between)\n• |x| > a  ⟺  x < -a  OR  x > a (Disjoint wings)\n\n⚡ Speed Hack: Test x = 0. If 0 satisfies the inequality, the solution must contain 0.",
    "category": "Formulas"
  },
  {
    "id": "FC_SRD_01",
    "topic": "SURD",
    "title": "Rationalizing Binomial Surds",
    "front": "How do you rationalize the denominator of 1 / (√a + √b)?",
    "back": "Multiply numerator and denominator by the conjugate (√a - √b):\n\n[1 / (√a + √b)] * [(√a - √b) / (√a - √b)] = (√a - √b) / (a - b)",
    "category": "Methods"
  },
  {
    "id": "FC_SRD_02",
    "topic": "SURD",
    "title": "Square Root of a Surd Hack",
    "front": "How do you find √(A ± √B) quickly in a CBT exam?",
    "back": "⚡ CBT Speed Hack: Simply square each multiple-choice option!\n\n(√x ± √y)² = (x + y) ± 2√(xy)\nThe correct option when squared will immediately equal A ± √B.",
    "category": "Speed Hacks"
  },
  {
    "id": "FC_LOG_01",
    "topic": "INDICES AND LOGARITHMS",
    "title": "Key Logarithm Identities",
    "front": "State the 4 essential logarithm laws.",
    "back": "1. log_b(xy) = log_b(x) + log_b(y)\n2. log_b(x/y) = log_b(x) - log_b(y)\n3. log_b(x^k) = k * log_b(x)\n4. Change of Base: log_b(a) = log_c(a) / log_c(b) = 1 / log_a(b)",
    "category": "Formulas"
  },
  {
    "id": "FC_IND_01",
    "topic": "MATHEMATICAL INDUCTION",
    "title": "The 3 Steps of Induction",
    "front": "What are the 3 mandatory steps of Mathematical Induction?",
    "back": "1. Base Step: Prove true for n = 1.\n2. Inductive Hypothesis: Assume true for n = k.\n3. Inductive Step: Prove true for n = k + 1 using the hypothesis.",
    "category": "Concepts"
  },
  {
    "id": "FC_IND_02",
    "topic": "MATHEMATICAL INDUCTION",
    "title": "Standard Summation Formulas",
    "front": "What are the formulas for Σr, Σr², and Σr³?",
    "back": "• Σr = n(n + 1) / 2\n• Σr² = n(n + 1)(2n + 1) / 6\n• Σr³ = [n(n + 1) / 2]² = n²(n + 1)² / 4\n\n⚡ In CBT: Test n = 1 and n = 2 into options to identify the correct formula in 10s!",
    "category": "Formulas"
  },
  {
    "id": "FC_BIN_01",
    "topic": "BINOMIAL EXPANSION",
    "title": "General Term Formula",
    "front": "What is the general term T_(r+1) in the expansion of (a + b)^n?",
    "back": "T_(r+1) = nCr * a^(n-r) * b^r\nWhere nCr = n! / [r!(n - r)!]\n\n• For (x + k/x)^n, set net power of x to 0 to find the constant term (independent of x).",
    "category": "Formulas"
  },
  {
    "id": "FC_BIN_02",
    "topic": "BINOMIAL EXPANSION",
    "title": "Sum of Coefficients Hack",
    "front": "How do you find the sum of all coefficients in an expansion like (2x - 3y)^5?",
    "back": "⚡ CBT Speed Hack: Substitute all variables = 1!\n\nFor (2x - 3y)^5, substitute x = 1, y = 1:\nSum = (2(1) - 3(1))^5 = (-1)^5 = -1.\nSolved in 3 seconds!",
    "category": "Speed Hacks"
  },
  {
    "id": "FC_MAT_01",
    "topic": "MATRICES AND DETERMINANT",
    "title": "2x2 Matrix Inverse Shortcut",
    "front": "What is the formula for the inverse of A = [[a, b], [c, d]]?",
    "back": "A^(-1) = (1 / det A) * [[d, -b], [-c, a]]\nWhere det A = ad - bc ≠ 0.\n\n⚡ Mnemonic: Swap main diagonal (a ↔ d), negate off-diagonal (-b, -c).",
    "category": "Formulas"
  },
  {
    "id": "FC_MAT_02",
    "topic": "MATRICES AND DETERMINANT",
    "title": "Singular Matrix Definition",
    "front": "When is a matrix said to be singular, and what does it imply?",
    "back": "A matrix A is singular if det(A) = 0.\n\n• Implications:\n  - A has NO inverse (A^(-1) does not exist).\n  - The system of equations does not have a unique solution.",
    "category": "Concepts"
  },
  {
    "id": "FC_QDR_01",
    "topic": "QUADRATIC EQUATION",
    "title": "Discriminant (D) Decision Matrix",
    "front": "What does the discriminant D = b² - 4ac reveal about the roots?",
    "back": "• D > 0: Two distinct real roots.\n• D = 0: Real and equal roots (repeated root).\n• D < 0: Complex conjugate roots (no real roots).\n• D > 0 and perfect square: Rational roots.",
    "category": "Rules"
  },
  {
    "id": "FC_QDR_02",
    "topic": "QUADRATIC EQUATION",
    "title": "Symmetric Relations of Roots",
    "front": "For ax² + bx + c = 0 with roots α, β, express α + β, αβ, and α² + β².",
    "back": "• Sum: S = α + β = -b/a\n• Product: P = αβ = c/a\n• α² + β² = (α + β)² - 2αβ = S² - 2P\n• 1/α + 1/β = (α + β) / (αβ) = S / P\n\n⚡ Equation with roots α, β: x² - Sx + P = 0.",
    "category": "Formulas"
  },
  {
    "id": "FC_QDR_03",
    "topic": "QUADRATIC EQUATION",
    "title": "Reciprocal Roots Shortcut",
    "front": "What is the shortcut equation having roots 1/α and 1/β if α, β are roots of ax² + bx + c = 0?",
    "back": "⚡ Speed Hack: Simply reverse the coefficients!\n\nOriginal: ax² + bx + c = 0\nReciprocal roots: cx² + bx + a = 0\n\nExample: Roots of 2x² - 5x + 3 = 0 ⇒ Reciprocal equation is 3x² - 5x + 2 = 0 in 2 seconds!",
    "category": "Speed Hacks"
  }
];
