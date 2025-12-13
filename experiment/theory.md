This experiment helps students understand what a linear transformation is and how it is related to matrices. The experiment shows that every linear transformation can be written using a matrix and vice-versa, which makes it easier to work with. By doing this, students learn how matrices can be used to represent transformations and apply these in various contexts in a simple and clear way.
#### 1. Linear transformation:
Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then a function <i>T</i>: <i>M→N</i> is called a linear transformation if, for <i>x, y</i>&isin;<i>M</i> and <i>α</i>&isin;<i>R</i> <br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>) <br>
(ii) <i>T</i>(<i>αx</i>)=<i>αT</i>(<i>x</i>)

![Linear transformaion](images/exp5image1.PNG "Linear transformaion")<br>
##### 1.1. Identity transformation:
Let <i>M</i> be a vector space over a field <i>R</i>. Then the function <i>T</i>: <i>M→M</i> defined as <i>T</i>(<i>x</i>)=<i>x</i>, where <i>x</i>&isin;<i>M</i>, is linear and is known as identity transformation.

![Identity transformaion](images/exp5image3.PNG "Identity transformaion")<br>
##### 1.2. Zero transformation:
Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then the function <i>T</i>: <i>M→N</i> defined as <i>T</i>(<i>x</i>)=0, where <i>x</i>&isin;<i>M</i>, is linear and is known as zero transformation.

![Zero transformaion](images/exp5image2.PNG "Zero transformaion")<br>
##### 1.3. Examples:
a). Let <i>T</i>: <i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y<i>)=(<i>x, -y</i>)$, where <i>x, y</i>&isin;</i>R</i>. Then <i>T</i> is linear.

#### Proof:
Let <i>x</i>=(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>) and <i>y</i>=(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)&isin;<i>R</i><sup>2</sup>. Then <i>T</i>(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)=(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>) and
<i>T</i>(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)=(<i>y</i><sub>1</sub>, -<i>y</i><sub>2</sub>). Notice that<br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>[(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)+(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)]=<i>T</i>(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)=(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, -(<i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)) and <i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>)=(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>)+ (<i>y</i><sub>1</sub>, -<i>y</i><sub>2</sub>)= (<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, -(<i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)). <br>
(ii) <i>T</i>(<i>αx<i>)=<i>T</i>(<i>αx</i><sub>1</sub>, <i>αx</i><sub>2</sub>)=(<i>αx</i><sub>1</sub>, -<i>αx</i><sub>2</sub>) and
<i>αT</i>(<i>x</i>)=<i>α</i>(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>)=(<i>αx</i><sub>1</sub>, -<i>αx</i><sub>2</sub>). <br>

b). Let <i>T</i>: <i>R</i><sup>2</sup> &rarr; R<sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(x, 0),$ where <i>x, y</i> &isin; <i>R</i>.$ Then $T$ is linear. <br>
#### Proof:
Let $x=(x_{1}, x_{2})$ and $y=(y_{1}, y_{2})$ &isin;<i>R</i><sup>2</sup>. Then $T(x_{1}, x_{2})=(x_{1}, -x_{2})$ and $T(y_{1}, y_{2})=(y_{1}, -y_{2}).$ Notice that<br>
(i) $T(x+y)=T[(x_{1}, x_{2})+(y_{1}, y_{2})]=T(x_{1}+y_{1}, x_{2}+y_{2})=(x_{1}+y_{1}, 0)$ and $T(x)+T(y)=(x_{1}, 0)+ (y_{1}, 0)=(x_{1}+y_{1}, 0).$ <br>
(ii) $T(αx)=T(αx_{1}, αx_{2})=(αx_{1}, 0)$ and
$αT(x)=α(x_{1}, 0)=(αx_{1}, 0).$ <br>

c). Let $T:R<sup>2</sup>$ &rarr; $R<sup>2</sup>$ such that $T(x, y)=(x, 0),$ where <i>x, y</i>&isin;<i>R</i>.$ Then $T$ is linear. <br>
#### Proof:
Let $x=(x_{1}, x_{2})$ and $y=(y_{1}, y_{2})$ &isin;<i>R</i><sup>2</sup>. Then $T(x_{1}, x_{2})=(x_{1}, -x_{2})$ and $T(y_{1}, y_{2})=(y_{1}, -y_{2}).$ Notice that<br>
(i) $T(x+y)=T[(x_{1}, x_{2})+(y_{1}, y_{2})]=T(x_{1}+y_{1}, x_{2}+y_{2})=( x_{2}+y_{2}, x_{1}+y_{1})$ and
$T(x)+T(y)=(-x_{2}, x_{1})+ (-y_{2}, y_{1})= ( x_{2}+y_{2}, x_{1}+y_{1}).$ <br>
(ii) $T(αx)=T(αx_{1}, αx_{2})=(αx_{1}, -αx_{2})$ and
$αT(x)=α(x_{2}, x_{1})=(αx_{1}, -αx_{2}).$

##### 1.4. Proposition:
   Let $T:M→N$ be a linear transformation. Then <br>
   (i) $T(0)=0;$ where 0 on the L.H.S is the zero vector of $M$ and 0 on the R.H.S is the zero vector of  $N.$ <br>
   (ii) $T(-x)=-T(x),$ for all $x \in M$ <br>
   (iii) $T(x-y)=T(x)-T(y),$ for all $x, y \in M$<br>
   (iv) $T(αx+βy)=αT(x)+βT(y),$ for all $x, y \in M$ and    $α, β \in R$<br>

##### 1.5. Proposition:
Let $T:V→W$ be a linear map and $V$ and $W$ be finite dimensional vector spaces over $R$ and <br>
$ B= \{e_{1}, e_{2}, …, e_{n}\} $ is a basis for $V$ and let $x= r_{1}f_{1}+r_{2} e_{2}+ ... +r_{n}e_{n},$ where $x &isin; V, r_{1}, r_{2}, …, r_{2} \in R.$ Then $T(e_{1}), T(e_{2}), …, T(e_{n})$ define $T,$ by  $T(x)= rT(e_{1})+sT(e_{2})+  … +tT(e_{n}).$

#### 2. Matrix associated with a linear transformation:
Let <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> be a linear transformation. Let <i>B</i><sub>1</sub>={<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, <i>f</i><sub>3</sub>} and <i>B</i><sub>2</sub>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} be basis of <i>R</i><sup>3</sup> and <i>R</i><sup>2</sup> respectively. Then <i>T</i>(<i>f</i><sub>1</sub>)=<i>ae</i><sub>1</sub>+<i>be</i><sub>2</sub>, <i>T</i>(<i>f</i><sub>2</sub>)=<i>ce</i><sub>1</sub>+<i>de</i><sub>2</sub> and <i>T</i>(<i>f</i><sub>3</sub>)=<i>ge</i><sub>1</sub>+<i>he</i><sub>2</sub>, for some <i>a, b, c, d, g, h</i>&isin;<i>R</i>.

Let <i>A</i>=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

Then matrix <i>A</i> is of order 2×3 and is called the matrix representation of <i>T</i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub>.<br>
In a similar way, one can check that a matrix representation of <i>T</i>: <i>R</i><sup><i>n</i></sup>→<i>R</i><sup><i>m</i></sup> is of order <i>m</i>×<i>n</i>.

##### 2.1. Example:
Let <i>T</i>: <i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> be a linear map defined as T(<i>x, y</i>)=(<i>x, -y</i>), where <i>x, y</i>&isin;<i>R</i>. Then find the matrix associated with the transformation w.r.t. the basis <i>B</i><sub>1</sub>={(1, 0), (0,1)} and <i>B</i><sub>2</sub>={(0, -1), (-1, 0)}.<br>
Let <i>e</i><sub>1</sub>=(1, 0), <i>e</i><sub>2</sub>=(0, 1), <i>f</i><sub>1</sub>=(0, -1) and <i>f</i><sub>2</sub>=(-1, 0). Thus <br>
<i>T</i>(1, 0)=(1, 0)=0.(0, -1)+(-1).(-1, 0)
<i>T</i>(0, 1)=(0, -1)= 1.(0, -1)+0.(-1, 0) and hence the matrix
representation of <i>T</i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> is

#### 3. Linear transformation associated with a matrix:
Let <i>A</i>=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

be a matrix of order 2×3. Then the linear transformation <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> associated with the matrix w.r.t. the basis <i>B</i><sub>1</sub>=>={<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, <i>f</i><sub>3</sub>} and <i>B</i><sub>2</sub>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} of <i>R</i><sup>3</sup>  and <i>R</i><sup>2</sup>respectively can be obtained as follows:<br>
Define <i>T</i>(<i>f</i><sub>1</sub>)=<i>ae</i><sub>1</sub>+<i>be</i><sub>2</sub>, <i>T</i>(<i>f</i><sub>2</sub>)=<i>ce</i><sub>1</sub>+<i>de</i><sub>2</sub> and <i>T</i>(<i>f</i><sub>3</sub>)=<i>ge</i><sub>1</sub>+<i>he</i><sub>2</sub>, where <i>a, b, c, d, g, h</i>&isin;<i>R</i>. Then for <i>x</i>&isin;<i>V</i>, there exist <i>r, s, t</i>&isin;<i>R</i> such that <i>x</i>=<i>rf</i><sub>1</sub>+<i>sf</i><sub>2</sub>+<i>tf</i><sub>3</sub>. Thus define <i>T</i>(<i>x</i>)=<i>rT</i>(<i>f</i><sub>1</sub>)+<i>sT</i>(<i>f</i><sub>2</sub>)+<i>tT</i>(<i>f</i><sub>3</sub>), because <i>T</i> has to be linear.

##### 3.1. Example:  
Consider <i>A</i>= $ \begin{pmatrix}1 & -1 & 0 \\\ 0 & 1 & 1\end{pmatrix} $

Then find the associated linear transformation of <i>A</i> w.r.t. the basis <i>B</i><sub>1</sub>={(1, 0, 0), (-1, 1, 0), (0, 1, 1)} and <i>B</i><sub>2</sub>={(-1, 1), (0, 1)} of <i>R</i><sup>3</sup> and <i>R</i><sup>2</sup> respectively.  <br>
Define <i>T</i>(1, 0, 0)=1(-1, 1)+0(0, 1)=(-1, 1), <i>T</i>(-1, 1, 0)=-1(-1, 1)+1(0, 1)=(1, 0) and <i>T</i>(0, 1, 1)=0(-1, 1)+1(0, 1)=(0, 1). Since (<i>x, y, z</i>)=<i>a</i>(1, 0, 0)+<i>b</i>(-1, 1, 0)+<i>c</i>(0, 1, 1), hence <i>a</i>-<i>b</i>=<i>x</i>, <i>b</i>+<i>c</i>=<i>y</i> and <i>c</i>=<i>z</i>. By solving these equations we get, <i>a</i>=<i>x</i>+<i>y</i>-<i>z</i>, <i>b</i>=<i>y</i>-<i>z</i> and <i>c</i>=<i>z</i>.<br>
Now, define  <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> by <i>T</i>(<i>x, y, z</i>)= <i>aT</i>(1, 0, 0)+<i>bT</i>(-1, 1, 0)+<i>cT</i>(0, 1, 1)=<i>a</i>(-1, 1)+<i>b</i>(1, 0)+<i>c</i>(0, 1)=(-<i>a</i>+<i>b</i>, <i>a</i>+<i>c</i>)=(-<i>x</i>, <i>x</i>+<i>y</i>), where <i>x, y</i>&isin;<i>R</i>.<br>
The linear transformation <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> associated with the matrix 2×3 <i>A<i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> is T(<i>x</i>, <i>y</i>, <i>z</i>)=(-<i>x</i>, <i>x</i>+<i>y</i>), where <i>x, y</i>&isin;<i>R</i>.
