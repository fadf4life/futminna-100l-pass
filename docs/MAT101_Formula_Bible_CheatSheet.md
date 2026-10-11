# FUTMINNA MAT 101: The "Grade-A" Formula & Shortcuts Bible
### Elementary Mathematics I (Algebra & Foundations)
*Designed for 100-Level Students, Federal University of Technology, Minna*

---

## 1. Set Theory
### Core Formulas & Laws
- **Cardinality of Union (Two Sets):**
  $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
- **Cardinality of Union (Three Sets):**
  $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - [n(A \cap B) + n(B \cap C) + n(A \cap C)] + n(A \cap B \cap C)$$
- **Number of Subsets & Proper Subsets:**
  - Total subsets of set with $n$ elements = $2^n$
  - Proper subsets = $2^n - 1$
  - Non-empty proper subsets = $2^n - 2$
- **De Morgan’s Laws:**
  $$(A \cup B)' = A' \cap B' \quad \text{and} \quad (A \cap B)' = A' \cup B'$$
- **Distributive Laws:**
  $$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$
  $$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$

> ⚡ **CBT Speed Hack:** In two-set word problems where everyone belongs to at least one group:
> $$\text{Both} = \text{Group}_1 + \text{Group}_2 - \text{Total}$$
> *Example:* 97% speak Hausa, 64% speak English $\implies \text{Both} = 97 + 64 - 100 = 61\%$. Solved in 3 seconds!

---

## 2. Mapping and Functions
### Core Definitions
- **Injective (One-to-One):** $f(a) = f(b) \implies a = b$. Every element in range has exactly one pre-image.
- **Surjective (Onto):** $\text{Range}(f) = \text{Codomain}(f)$. Every element in codomain has at least one pre-image.
- **Bijective:** Both Injective AND Surjective. A function is invertible ($f^{-1}$ exists) **if and only if** it is bijective.
- **Composite Function:** $(f \circ g)(x) = f(g(x))$. Note: $f \circ g \neq g \circ f$ in general.

### Inverse Function Quick Algorithm
For linear fractional function $f(x) = \frac{ax + b}{cx + d}$:
$$f^{-1}(x) = \frac{-dx + b}{cx - a} \quad \text{(Swap } a \text{ and } d\text{, and negate both!)}$$

> ⚡ **CBT Speed Hack:** To find $f^{-1}(k)$, you do NOT need to find the inverse expression! Just set $f(x) = k$ and solve for $x$.

---

## 3. Complex Numbers
### Algebraic Properties
Let $z = x + iy = x + jy$, with $i^2 = j^2 = -1$.
- **Cyclic Powers of $i$:**
  $$i^{4k} = 1, \quad i^{4k+1} = i, \quad i^{4k+2} = -1, \quad i^{4k+3} = -i$$
  *Rule:* Divide power by 4; the remainder is the equivalent power ($i^{75} = i^{4(18)+3} = i^3 = -i$).
- **Modulus:** $|z| = r = \sqrt{x^2 + y^2}$
- **Conjugate:** $\bar{z} = x - iy \implies z \bar{z} = x^2 + y^2 = |z|^2$
- **Division:** $\frac{z_1}{z_2} = \frac{z_1 \bar{z}_2}{|z_2|^2}$

### Polar Form & Argument ($\theta$)
$$z = r(\cos\theta + i\sin\theta) = r e^{i\theta}$$
**Quadrant Decision Rules for $\theta = \text{Arg}(z)$:**
| Quadrant | Signs | Formula for $\theta$ |
|:---:|:---:|:---|
| **I** | $x > 0, y > 0$ | $\theta = \alpha = \tan^{-1}\left|\frac{y}{x}\right|$ |
| **II** | $x < 0, y > 0$ | $\theta = 180^\circ - \alpha$ |
| **III** | $x < 0, y < 0$ | $\theta = -180^\circ + \alpha$ or $180^\circ + \alpha$ |
| **IV** | $x > 0, y < 0$ | $\theta = -\alpha$ or $360^\circ - \alpha$ |

- **De Moivre’s Theorem:**
  $$[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$$

---

## 4. Inequalities
### Rules & Traps
- **Sign Reversal:** Multiplying or dividing by a **negative** number reverses the inequality:
  $$-2x < 6 \implies x > -3$$
- **Rational Inequalities:** NEVER cross-multiply expressions containing unknown variables!
  $$\frac{P(x)}{Q(x)} \ge 0 \implies \text{Find critical values of } P(x)=0 \text{ and } Q(x)=0\text{, test intervals on number line.}$$
  *Note:* Denominator critical value is always strictly excluded (open circle, round bracket).
- **Absolute Value Rules:**
  - $|x| \le a \iff -a \le x \le a$ (Between condition)
  - $|x| \ge a \iff x \le -a \text{ or } x \ge a$ (Outside wings)

> ⚡ **CBT Speed Hack (Option Testing):** Test $x = 0$ or extreme test values like $x = 100$ or $x = -100$. This instantly eliminates 2 or 3 options in under 10 seconds without drawing a number line.

---

## 5. Surds
### Rules & Conjugate Rationalization
- **Multiplication / Division:** $\sqrt{a} \times \sqrt{b} = \sqrt{ab}$, $\frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}$
- **Conjugate of Binomial Surd:**
  - Conjugate of $(\sqrt{a} + \sqrt{b})$ is $(\sqrt{a} - \sqrt{b})$
  - Product: $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$
- **Square Root of a Surd:**
  $$\sqrt{A \pm \sqrt{B}} = \sqrt{x} \pm \sqrt{y}$$
  Where $x + y = A$ and $4xy = B \implies xy = \frac{B}{4}$.

> ⚡ **CBT Speed Hack:** When asked to find $\sqrt{A \pm \sqrt{B}}$, simply square each multiple-choice option! The correct option will yield $A \pm \sqrt{B}$.

---

## 6. Indices and Logarithms
### Laws of Indices
- $a^m \times a^n = a^{m+n}$
- $\frac{a^m}{a^n} = a^{m-n}$
- $(a^m)^n = a^{mn}$
- $a^0 = 1$ ($a \neq 0$)
- $a^{-n} = \frac{1}{a^n}$
- $a^{m/n} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$

### Laws of Logarithms
- $\log_b(xy) = \log_b x + \log_b y$
- $\log_b\left(\frac{x}{y}\right) = \log_b x - \log_b y$
- $\log_b(x^k) = k \log_b x$
- **Change of Base:** $\log_b a = \frac{\log_c a}{\log_c b} = \frac{1}{\log_a b}$
- **Identity:** $b^{\log_b x} = x$

---

## 7. Mathematical Induction
### Standard Steps
1. **Base Step:** Prove the statement $P(n)$ is true for $n = 1$.
2. **Inductive Hypothesis:** Assume $P(n)$ is true for $n = k$.
3. **Inductive Step:** Prove $P(n)$ is true for $n = k + 1$ using the assumption in step 2.

### Common Series Formulas to Memorize
- $\sum_{r=1}^n r = 1 + 2 + \dots + n = \frac{n(n+1)}{2}$
- $\sum_{r=1}^n r^2 = 1^2 + 2^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$
- $\sum_{r=1}^n r^3 = 1^3 + 2^3 + \dots + n^3 = \left[\frac{n(n+1)}{2}\right]^2 = \frac{n^2(n+1)^2}{4}$

> ⚡ **CBT Speed Hack:** Never perform full induction in a CBT exam! Just test $n = 1$ and $n = 2$ in the given options. The correct formula must match the sum for both $n=1$ and $n=2$.

---

## 8. Binomial Expansion
### General Term Formula
For $(a + b)^n$:
$$T_{r+1} = \binom{n}{r} a^{n-r} b^r = \frac{n!}{r!(n-r)!} a^{n-r} b^r$$
- **Total terms in expansion of $(a + b)^n$:** $n + 1$ terms.
- **Term Independent of $x$ (Constant Term):** Set the exponent of $x$ equal to $0$ and solve for $r$.
- **Negative or Fractional Exponents:**
  $$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!} x^2 + \frac{n(n-1)(n-2)}{3!} x^3 + \dots \quad (|x| < 1)$$

---

## 9. Matrices and Determinants
### $2 \times 2$ Matrix Properties
Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
- $\det(A) = |A| = ad - bc$
- **Singular Matrix:** $|A| = 0$ (inverse does not exist)
- **Inverse Matrix:**
  $$A^{-1} = \frac{1}{|A|} \text{adj}(A) = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$
  *(Swap main diagonal elements $a$ & $d$, flip signs of off-diagonal $b$ & $c$!)*

### $3 \times 3$ Determinant Shortcut (Sarrus' Rule)
For $\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}$:
$$|A| = a(ei - fh) - b(di - fg) + c(dh - eg)$$

### Cramer’s Rule for $2 \times 2$ Linear Systems
$$a_1 x + b_1 y = c_1, \quad a_2 x + b_2 y = c_2$$
$$x = \frac{\Delta_x}{\Delta}, \quad y = \frac{\Delta_y}{\Delta}$$
Where $\Delta = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix}$, $\Delta_x = \begin{vmatrix} c_1 & b_1 \\ c_2 & b_2 \end{vmatrix}$, $\Delta_y = \begin{vmatrix} a_1 & c_1 \\ a_2 & c_2 \end{vmatrix}$.

---

## 10. Quadratic Equations
### Nature of Roots ($D = b^2 - 4ac$)
- $D > 0$: Two distinct real roots
- $D = 0$: Real and equal roots (repeated root)
- $D < 0$: Complex conjugate roots (no real roots)
- $D$ is a perfect square ($> 0$): Rational roots

### Symmetric Functions of Roots
For $ax^2 + bx + c = 0$ with roots $\alpha, \beta$:
- **Sum of roots:** $S = \alpha + \beta = -\frac{b}{a}$
- **Product of roots:** $P = \alpha\beta = \frac{c}{a}$
- **Forming Equation with Given Roots:**
  $$x^2 - (\text{Sum})x + (\text{Product}) = 0$$

### Key Symmetric Polynomial Identities:
- $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = S^2 - 2P$
- $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{S}{P}$
- $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = S^3 - 3SP$
- $(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta = S^2 - 4P \implies |\alpha - \beta| = \frac{\sqrt{b^2 - 4ac}}{|a|}$
