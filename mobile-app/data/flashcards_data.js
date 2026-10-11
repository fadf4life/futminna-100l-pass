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

// === PHY 101 FLASHCARDS ===
window.PHY101_FLASHCARDS = [
  {
    "id": "PHY_FC_01",
    "topic": "Dimensions & Units",
    "front": "What are the dimensions of Pressure, Stress, and Young's Modulus?",
    "back": "ML⁻¹T⁻²\nDerived from Force/Area = MLT⁻² / L².",
    "tips": "Pressure, Stress, and all Elastic Moduli share ML⁻¹T⁻²!"
  },
  {
    "id": "PHY_FC_02",
    "topic": "Dimensions & Units",
    "front": "What physical quantities share the dimension ML²T⁻²?",
    "back": "Work, Kinetic Energy, Potential Energy, Heat, and Torque.",
    "tips": "Torque = r × F and Work = F · d both have units of N·m -> ML²T⁻²."
  },
  {
    "id": "PHY_FC_03",
    "topic": "Vectors & Scalars",
    "front": "What is the difference between a Free Vector and a Localized Vector?",
    "back": "Free Vector: Can be shifted parallel to itself without changing effect (e.g. Displacement, Couple).\nLocalized Vector: Has a fixed line of action or point of application (e.g. Force on a rigid body).",
    "tips": "Displacement is free; Force is localized."
  },
  {
    "id": "PHY_FC_04",
    "topic": "Vectors & Scalars",
    "front": "What condition gives the MAXIMUM and MINIMUM resultant of two vectors A and B?",
    "back": "Maximum: θ = 0° (parallel, R = A + B)\nMinimum: θ = 180° (anti-parallel, R = |A - B|)",
    "tips": "If angle is 90°, R = √(A² + B²)."
  },
  {
    "id": "PHY_FC_05",
    "topic": "Kinematics",
    "front": "What are the 4 fundamental Equations of Linear Motion (constant a)?",
    "back": "1. v = u + at\n2. s = ut + ½at²\n3. v² = u² + 2as\n4. s = ½(u + v)t",
    "tips": "For free fall under gravity, replace a with g (or -g when upward)."
  },
  {
    "id": "PHY_FC_06",
    "topic": "Dynamics & Momentum",
    "front": "State Newton's Second Law of Motion in its most general form.",
    "back": "Force = Rate of change of momentum (F = dp/dt).\nWhen mass is constant, F = m(dv/dt) = ma.",
    "tips": "Impulse J = FΔt = Δp (change in momentum)."
  },
  {
    "id": "PHY_FC_07",
    "topic": "Relativity & Space-Time",
    "front": "What are Einstein's Two Postulates of Special Relativity?",
    "back": "1. Principle of Relativity: The laws of physics are identical in all inertial reference frames.\n2. Constancy of Speed of Light: The speed of light c in vacuum is constant (3 × 10⁸ m/s) for all observers regardless of source motion.",
    "tips": "Special relativity applies ONLY to non-accelerating (inertial) frames."
  },
  {
    "id": "PHY_FC_08",
    "topic": "Relativity & Space-Time",
    "front": "How did Leibniz's concept of space differ from Newton's?",
    "back": "Newton: Space is absolute, an independent container.\nLeibniz: Space is relational, defined only by the spatial relations between objects.",
    "tips": "Leibniz = Relational; Newton = Absolute."
  },
  {
    "id": "PHY_FC_09",
    "topic": "Work, Energy & Power",
    "front": "What is the formula and dimension of Power?",
    "back": "P = dW/dt = F · v\nDimension: ML²T⁻³ (SI unit: Watt = J/s)",
    "tips": "1 Horsepower (hp) ≈ 746 Watts."
  },
  {
    "id": "PHY_FC_10",
    "topic": "Properties of Matter",
    "front": "What is the dimension of Surface Tension (γ)?",
    "back": "γ = Force / Length = [MLT⁻²] / [L] = MT⁻².\nEquivalently: Energy / Area = ML²T⁻² / L² = MT⁻².",
    "tips": "Surface tension has NO length dimension: MT⁻²."
  }
];

// === CHM 111 FLASHCARDS ===
window.CHM111_FLASHCARDS = [
  {
    "id": "CHM111_FC_01",
    "topic": "Chemical Thermodynamics",
    "front": "State the Gibbs Free Energy equation and spontaneity conditions.",
    "back": "ΔG = ΔH - TΔS\n• ΔG < 0: Spontaneous (exergonic)\n• ΔG = 0: System at dynamic equilibrium\n• ΔG > 0: Non-spontaneous (endergonic)",
    "tips": "At equilibrium: ΔH = TΔS -> T_eq = ΔH / ΔS."
  },
  {
    "id": "CHM111_FC_02",
    "topic": "Chemical Equilibrium",
    "front": "What is the relationship between ΔG° and the equilibrium constant K?",
    "back": "ΔG° = -RT ln K\n• K > 1: ΔG° < 0 (products favored)\n• K = 1: ΔG° = 0\n• K < 1: ΔG° > 0 (reactants favored)",
    "tips": "Large K means reaction goes virtually to completion!"
  },
  {
    "id": "CHM111_FC_03",
    "topic": "Le Chatelier's Principle",
    "front": "How does increasing pressure/decreasing volume affect equilibrium?",
    "back": "The equilibrium shifts toward the side with FEWER moles of gas.\nIf Δn_gas = 0, pressure change has NO effect on equilibrium position.",
    "tips": "Count stoichiometric gas coefficients on left vs. right!"
  },
  {
    "id": "CHM111_FC_04",
    "topic": "Chemical Kinetics",
    "front": "What is the Arrhenius equation and what does each term mean?",
    "back": "k = A e^(-Ea / RT)\n• k = rate constant\n• A = frequency factor\n• Ea = activation energy\n• R = gas constant (8.314 J/mol·K)\n• T = temperature in Kelvin",
    "tips": "Catalysts increase k by lowering Ea, without altering ΔH or K_eq!"
  },
  {
    "id": "CHM111_FC_05",
    "topic": "Ionic Equilibria",
    "front": "What is the Henderson-Hasselbalch equation for an acidic buffer?",
    "back": "pH = pKa + log([Conjugate Base] / [Weak Acid])\n= pKa + log([A⁻] / [HA])",
    "tips": "When [A⁻] = [HA], pH = pKa (maximum buffer capacity)!"
  }
];

// === CHM 191 FLASHCARDS ===
window.CHM191_FLASHCARDS = [
  {
    "id": "CHM191_FC_01",
    "topic": "Volumetric Analysis",
    "front": "What is the difference between Titrant and Analyte (Titrand)?",
    "back": "Titrant: Solution of known concentration placed in the burette.\nAnalyte (Titrand): Solution of unknown concentration placed in the conical flask.",
    "tips": "Titrant delivers known volume from burette to neutralize analyte."
  },
  {
    "id": "CHM191_FC_02",
    "topic": "Volumetric Analysis",
    "front": "Difference between Equivalence Point and Endpoint?",
    "back": "Equivalence Point: Theoretical stoichiometric point where moles of acid = moles of base.\nEndpoint: Experimental point where indicator changes color.",
    "tips": "Titration error = |Endpoint - Equivalence Point|."
  },
  {
    "id": "CHM191_FC_03",
    "topic": "Indicators & pH",
    "front": "Which indicators are used for Strong Acid vs. Strong Base, and Strong Acid vs. Weak Base?",
    "back": "• Strong Acid + Strong Base: Methyl Orange (red to yellow, pH 3.1-4.4) or Phenolphthalein (colorless to pink, pH 8.3-10.0).\n• Strong Acid + Weak Base: Methyl Orange (acidic equivalence point).\n• Weak Acid + Strong Base: Phenolphthalein (basic equivalence point).",
    "tips": "NEVER use weak acid + weak base for volumetric titrations!"
  },
  {
    "id": "CHM191_FC_04",
    "topic": "Lab Apparatus & Safety",
    "front": "How do you read the meniscus on a burette or pipette?",
    "back": "• Clear/colorless liquids (water, acid): Read bottom of concave meniscus at eye level.\n• Highly colored liquids (KMnO₄): Read top of meniscus.",
    "tips": "Always avoid parallax error by keeping eye strictly horizontal with meniscus."
  },
  {
    "id": "CHM191_FC_05",
    "topic": "Primary Standards",
    "front": "What are the essential properties of a Primary Standard in CHM 191?",
    "back": "1. Extremely high purity (≥ 99.9%)\n2. High molar mass (minimizes weighing error)\n3. Air-stable, non-hygroscopic (does not absorb moisture or CO₂)\n4. Ready solubility in solvent\nExamples: Anhydrous Na₂CO₃, Potassium hydrogen phthalate (KHP), Oxalic acid dihydrate.",
    "tips": "NaOH and HCl are SECONDARY standards because they absorb moisture/air."
  }
];
