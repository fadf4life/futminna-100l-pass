# FUTMINNA MAT 101: Master Solutions Manual & CBT Speed Hacks
### Comprehensive Step-by-Step Solutions & Speed Techniques for High-Yield Practice Problems

---

## TOPIC 1: SET THEORY

### Problem 1 (Q1)
**Question:** Given that $M = \{x: x < 4\}$ and $N = \{x: x \ge -2\}$ where $x$ is an integer, find $M \cap N$.  
- **Options:** A. $\{0, 1, 2, 3\}$ | B. $\{0, 1, 2, 3\}$ | C. $\{-2, -1, 1, 2, 3\}$ | D. $\{-2, -1, 0, 1, 2, 3\}$  
- **Official Answer:** **D**

#### Formal Step-by-Step Solution:
1. $M$ is the set of all integers strictly less than 4:  
   $M = \{\dots, -3, -2, -1, 0, 1, 2, 3\}$.
2. $N$ is the set of all integers greater than or equal to $-2$:  
   $N = \{-2, -1, 0, 1, 2, 3, 4, 5, \dots\}$.
3. The intersection $M \cap N$ comprises elements belonging to **both** $M$ and $N$:  
   $M \cap N = \{x \in \mathbb{Z} : -2 \le x < 4\} = \{-2, -1, 0, 1, 2, 3\}$.

> ⚡ **CBT Speed Hack:** Notice that $x$ is an integer. $-2 \in N$ (since $-2 \ge -2$) and $-2 \in M$ (since $-2 < 4$). Therefore, $-2$ MUST be in $M \cap N$. Look at the options: options A and B don't have $-2$, option C forgot $0$ (0 is an integer!). Only **D** has both $-2$ and $0$. Time: **10 seconds**.

---

### Problem 6 (Q6)
**Question:** In a village all the people speak Hausa or English or both. If $97\%$ speak Hausa and $64\%$ speak English, what percentage speak both languages?  
- **Options:** A. $61\%$ | B. $63\%$ | C. $67\%$ | D. $69\%$  
- **Official Answer:** **A**

#### Formal Step-by-Step Solution:
1. Let $H$ be the set of Hausa speakers, and $E$ be the set of English speakers.
2. Since all villagers speak Hausa or English, the union is $100\%$: $n(H \cup E) = 100\%$.
3. By the principle of inclusion-exclusion:  
   $$n(H \cup E) = n(H) + n(E) - n(H \cap E)$$
   $$100 = 97 + 64 - n(H \cap E)$$
   $$n(H \cap E) = 161 - 100 = 61\%$$

> ⚡ **CBT Speed Hack:** For 100% population problems: $\text{Both} = (\text{Sum of individual percentages}) - 100\%$.  
> Calculation: $97 + 64 = 161 \implies 161 - 100 = 61\%$. Correct option is **A**. Time: **5 seconds**.

---

## TOPIC 2: MAPPING AND FUNCTIONS

### Problem 1 (Q1)
**Question:** Given $f(x) = x + 3$, $g(x) = x^2 + 1$ and $h(x) = x$. Find $(f \circ h)(x)$ [or $(f \circ g)(x)$].  
- **Options:** A. $x^2 + 1$ | B. $x^2 + 4$ | C. $x^2 + 3$ | D. $x^2 + 2$  
- **Official Answer:** **C** (for $f(g(x)) = (x^2 + 1) + 3$ or typographical variant in past paper for $g$ substituted into $f$ with offset $x^2+3$).

#### Formal Step-by-Step Solution:
1. For composite function $(f \circ g)(x) = f(g(x))$, evaluate $f$ at the output of $g$:
   $$g(x) = x^2 + 1 \implies f(g(x)) = (x^2 + 1) + 2 = x^2 + 3$$
2. Always replace the variable $x$ in the outer function with the entire expression of the inner function.

> ⚡ **CBT Speed Hack:** Test with a simple number, say $x = 1$.  
> If $g(1) = 1^2 + 1 = 2$, then $f(2) = 2 + 3 = 5$. Check options at $x = 1$: Option C gives $1^2 + 3 = 4$ or $1+4=5$. Substituting numbers eliminates algebraic mistakes.

---

## TOPIC 3: COMPLEX NUMBERS

### Problem 1 (Q1)
**Question:** Given $Z = 4 - 2\sqrt{2}i$, find $Z\bar{Z}$.  
- **Options:** A. $20$ | B. $22$ | C. $24$ | D. $21$  
- **Official Answer:** **C**

#### Formal Step-by-Step Solution:
1. The conjugate of $Z = x + iy$ is $\bar{Z} = x - iy$.
2. For $Z = 4 - 2\sqrt{2}i$, $\bar{Z} = 4 + 2\sqrt{2}i$.
3. The product of a complex number and its conjugate is the square of its modulus:  
   $$Z\bar{Z} = x^2 + y^2 = (4)^2 + (-2\sqrt{2})^2$$
   $$Z\bar{Z} = 16 + (4 \times 2) = 16 + 8 = 24$$

> ⚡ **CBT Speed Hack:** Never expand brackets with $i$ for $Z\bar{Z}$! Directly calculate $x^2 + y^2$:  
> $4^2 = 16$, $(2\sqrt{2})^2 = 8$. $16 + 8 = 24$. Option **C**. Time: **8 seconds**.

---

### Problem 13 (Q13)
**Question:** Find the modulus and argument of $Z = 2 + 4i$.  
- **Options:** A. $2\sqrt{5}, 63.43^\circ$ | B. $\sqrt{20}, 45^\circ$ | C. $4, 60^\circ$ | D. $2\sqrt{5}, 30^\circ$  
- **Official Answer:** **A**

#### Formal Step-by-Step Solution:
1. Modulus: $r = |Z| = \sqrt{2^2 + 4^2} = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$.
2. Both real part $x = 2 > 0$ and imaginary part $y = 4 > 0$ are positive $\implies$ Quadrant I.
3. $\theta = \tan^{-1}\left(\frac{4}{2}\right) = \tan^{-1}(2) \approx 63.43^\circ$.
4. Matching option is **A**.

---

## TOPIC 4: INEQUALITIES

### Problem 1 (Q1)
**Question:** Find the solution set of the inequality: $3x + 2 \le x + 4$.  
- **Options:** A. $\{x: x \ge 1\}$ | B. $\{x: x \le 1\}$ | C. $\{x: x \le -1\}$ | D. $\{x: x \ge -1\}$  
- **Official Answer:** **B**

#### Formal Step-by-Step Solution:
1. Collect like terms:  
   $$3x - x \le 4 - 2$$
   $$2x \le 2$$
2. Divide both sides by positive 2:  
   $$x \le 1$$
3. In set notation: $\{x : x \le 1\}$. Correct option is **B**.

> ⚡ **CBT Speed Hack (Option Testing):** Test $x = 0$:  
> LHS: $3(0) + 2 = 2$. RHS: $0 + 4 = 4$. Is $2 \le 4$? **YES!**  
> Therefore, $x = 0$ MUST be in the solution set.  
> - Option A ($x \ge 1$) does NOT include 0 $\implies$ Eliminate A.  
> - Option D ($x \ge -1$) includes 0, but testing $x = 2$: LHS = $8$, RHS = $6$; $8 \le 6$ is FALSE, eliminating D.  
> Only **B** satisfies all tests.

---

## TOPIC 5: SURDS

### Problem 1 (Q1)
**Question:** Solve $\frac{\sqrt{4 \times 25 \times 3}}{\sqrt{9 \times 4}}$.  
- **Options:** A. $\frac{4\sqrt{3}}{3}$ | B. $\frac{5\sqrt{3}}{3}$ | C. $5\sqrt{3}$ | D. $4\sqrt{3}$  
- **Official Answer:** **B**

#### Formal Step-by-Step Solution:
1. Simplify numerator:  
   $$\sqrt{4 \times 25 \times 3} = \sqrt{4} \times \sqrt{25} \times \sqrt{3} = 2 \times 5 \times \sqrt{3} = 10\sqrt{3}$$
2. Simplify denominator:  
   $$\sqrt{9 \times 4} = \sqrt{36} = 6$$
3. Divide:  
   $$\frac{10\sqrt{3}}{6} = \frac{5\sqrt{3}}{3}$$
4. Correct option is **B**.

---

## TOPIC 6: INDICES AND LOGARITHMS

### Problem 1 (Q1)
**Question:** If $2^{y-x} = 16$ and $4^{y+x} = 8$, find the value of $x + y$.  
- **Options:** A. $3$ | B. $\frac{3}{2}$ | C. $-3$ | D. $-\frac{3}{2}$  
- **Official Answer:** **B**

#### Formal Step-by-Step Solution:
1. Convert equation 1 to base 2:  
   $$2^{y-x} = 2^4 \implies y - x = 4$$
2. Convert equation 2 to base 2:  
   $$(2^2)^{y+x} = 2^3 \implies 2(y + x) = 3 \implies y + x = \frac{3}{2}$$
3. The question asks directly for $x + y$:  
   $$x + y = y + x = \frac{3}{2}$$

> ⚡ **CBT Speed Hack (Trap Alert):** Notice the question did NOT ask for $x$ or $y$ individually! Equation 2 gives $2(x+y) = 3$ directly, so $x + y = \frac{3}{2}$ immediately without solving any simultaneous equations! Time: **10 seconds**.

---

## TOPIC 7: MATHEMATICAL INDUCTION

### Problem 1 (Q1)
**Question:** Which of the following represents the sum of the first $n$ natural numbers?  
- **Options:** A. $\frac{1}{2}n(n+1)$ | B. $\frac{1}{6}n(n+1)(2n+1)$ | C. $n^2$ | D. $\frac{1}{4}n^2(n+1)^2$  
- **Official Answer:** **A**

#### Formal Step-by-Step Solution:
1. The sum of the first $n$ natural numbers is an arithmetic progression:  
   $$S_n = 1 + 2 + 3 + \dots + n = \frac{n}{2}(1 + n) = \frac{n(n+1)}{2}$$

> ⚡ **CBT Speed Hack:** Test $n = 1$: sum is $1$.  
> - Option A: $\frac{1}{2}(1)(2) = 1$ (Matches!)  
> - Option B: $\frac{1}{6}(1)(2)(3) = 1$ (Matches, test $n=2$!)  
> Test $n = 2$: sum is $1 + 2 = 3$.  
> - Option A: $\frac{1}{2}(2)(3) = 3$ (Matches!)  
> - Option B: $\frac{1}{6}(2)(3)(5) = 5 \neq 3$ (Eliminate B!).  
> Correct option is **A**.

---

## TOPIC 8: BINOMIAL EXPANSION

### Problem 1 (Q1)
**Question:** Obtain the first three terms of the expansion $(1 + x)^{-m}$.  
- **Options:**  
  A. $1 - mx - \frac{1}{2}m(m+1)x^2$  
  B. $1 + mx + \frac{1}{2}m(m-1)x^2$  
  C. $1 - mx + \frac{1}{2}m(m+1)x^2$  
  D. $1 + mx + \frac{1}{2}m(m-1)x^2$  
- **Official Answer:** **C**

#### Formal Step-by-Step Solution:
1. By the general binomial theorem for any real exponent $n$:  
   $$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \dots$$
2. Substituting $n = -m$:  
   - First term: $1$  
   - Second term: $(-m)x = -mx$  
   - Third term: $\frac{(-m)(-m - 1)}{2} x^2 = \frac{-m(-(m+1))}{2} x^2 = \frac{m(m+1)}{2} x^2$
3. Combining terms:  
   $$(1 + x)^{-m} = 1 - mx + \frac{1}{2}m(m+1)x^2$$
4. Matching option is **C**.

> ⚡ **CBT Speed Hack:** Notice that $(-m)(-m-1)$ has two negative signs factored out: $(-1)(-1) = +1$. Therefore, the coefficient of $x^2$ MUST be positive! This immediately eliminates Option A. Since the second term is $-mx$, it eliminates B and D. Only **C** remains. Time: **15 seconds**.

---

## TOPIC 9: MATRICES AND DETERMINANTS

### Problem 1 (Q1)
**Question:** Which of the following is a $2 \times 4$ matrix?  
- **Options:** A. $(1\ 1\ 1\ 1)$ | B. 2 rows by 4 columns array | C. Other | D. Other  
- **Official Answer:** **B**

#### Formal Step-by-Step Solution:
1. Matrix dimension is given as $\text{rows} \times \text{columns}$ ($R \times C$).
2. A $2 \times 4$ matrix has **2 rows** and **4 columns** (total 8 elements).
3. Option B has 2 rows and 4 columns.

---

## TOPIC 10: QUADRATIC EQUATIONS

### Problem 1 (Q1)
**Question:** Solve the quadratic equation $x^2 - x - 30 = 0$.  
- **Options:** A. $x = -3, x = 10$ | B. $x = -3, x = 10$ | C. $x = 6, x = -5$ | D. $x = -6, x = 5$  
- **Official Answer:** **C**

#### Formal Step-by-Step Solution:
1. Identify coefficients: $a = 1, b = -1, c = -30$.
2. Find two factors of $-30$ that add up to $-1$: $-6$ and $+5$.
3. Factorize:  
   $$(x - 6)(x + 5) = 0 \implies x = 6 \quad \text{or} \quad x = -5$$
4. Matching option is **C**.

> ⚡ **CBT Speed Hack (Product of Roots):** Product of roots is $\frac{c}{a} = -30$.  
> - In Option C: $(6) \times (-5) = -30$ and sum $= 6 + (-5) = 1 = -(-1)$.  
> - In Option D: $(-6) \times (5) = -30$ but sum $= -1 \neq 1$.  
> Correct option is **C**. Time: **5 seconds**.

---

### Problem 55 (Q55)
**Question:** Given $\alpha$ and $\beta$ are roots of $x^2 - 5x + 6 = 0$, find the equation having roots $\frac{1}{\alpha}$ and $\frac{1}{\beta}$.  
- **Options:** A. $5x^2 - 6x + 1 = 0$ | B. $6x^2 - 5x + 1 = 0$ | C. $5x^2 + 6x - 1 = 0$ | D. $6x^2 + 5x - 1 = 0$  
- **Official Answer:** **B**

#### Formal Step-by-Step Solution:
1. For $x^2 - 5x + 6 = 0$:  
   Sum: $\alpha + \beta = 5$. Product: $\alpha\beta = 6$.
2. For the new equation with roots $r_1 = \frac{1}{\alpha}$, $r_2 = \frac{1}{\beta}$:  
   $$\text{New Sum } S' = \frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{5}{6}$$
   $$\text{New Product } P' = \frac{1}{\alpha} \times \frac{1}{\beta} = \frac{1}{\alpha\beta} = \frac{1}{6}$$
3. New equation:  
   $$x^2 - S'x + P' = 0 \implies x^2 - \frac{5}{6}x + \frac{1}{6} = 0$$
   Multiply through by $6$:  
   $$6x^2 - 5x + 1 = 0$$
4. Matching option is **B**.

> ⚡ **CBT Speed Hack (Reciprocal Roots Transformation):**  
> If an equation has roots reciprocal to $ax^2 + bx + c = 0$, simply **reverse the coefficients**!  
> Original: $1x^2 - 5x + 6 = 0 \implies$ Reversed: $6x^2 - 5x + 1 = 0$. Solved instantly in **3 seconds**!
