This experiment helps students understand what a linear transformation is and how it is related to matrices. The experiment shows that every linear transformation can be written using a matrix and vice-versa, which makes it easier to work with. By doing this, students learn how matrices can be used to represent transformations and apply these in various contexts in a simple and clear way.
#### 1. Linear transformation:
Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then a function <i>T</i>:<i>M→N</i> is called a linear transformation if, for<i>x, y</i>&isin;<i>M</i> and <i>α</i>&isin;<i>R</i> <br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>) <br>
(ii) <i>T</i>(<i>αx</i>)=<i>αT</i>(<i>x</i>)

![Linear transformaion](images/exp5image1.PNG "Linear transformaion")<br>
##### 1.1. Identity transformation:
Let <i>M</i> be a vector space over a field <i>R</i>. Then the function <i>T</i>:<i>M→M</i> defined as <i>T</i>(<i>x</i>)=<i>x</i>, where <i>x</i>&isin;<i>M</i>, is linear and is known as identity transformation.

![Identity transformaion](images/exp5image3.PNG "Identity transformaion")<br>
##### 1.2. Zero transformation:
Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then the function <i>T</i>:<i>M→N</i> defined as <i>T(<i>x</i>)=0, where <i>x</i>&isin;<i>M</i>, is linear and is known as zero transformation.

![Zero transformaion](images/exp5image2.PNG "Zero transformaion")<br>
##### 1.3. Examples:
a). Let <i>T</i>:<i>R^{2}→R^{2}$ such that $T(x, y)=(x, -y)$, where $x, y \in R$. Then $T$ is linear.

#### Proof:
Let $x=(x_{1}, x_{2})$ and $y=(y_{1}, y_{2}) \in R^{2}.$ Then $T(x_{1}, x_{2})=(x_{1}, -x_{2})$ and
$T(y_{1}, y_{2})=(y_{1}, -y_{2})$. Notice that<br>
(i) $T(x+y)=T[(x_{1}, x_{2}>)+(y_{1}, y_{2})]=T(x_{1}+y_{1}, x_{2}+y_{2})=(x_{1}+y_{1}, -(x_{2}+y_{2}))$ and $T(x)+T(y)=(x_{1}, -x_{2})+ (y_{1}, -y_{2})= (x_{1}+y_{1}, -(x_{2}+y_{2})).$ <br>
(ii) $T(αx)=T(αx_{1}, αx_{2})=(αx_{1}, -αx_{2})$ and
$αT(x)=α(x_{1}, -x_{2})=(αx_{1}, -αx_{2}).$ <br>

b). Let $T:R^{2}$ &rarr; $R^{2}$ such that $T(x, y)=(x, 0),$ where $x, y \in R.$ Then $T$ is linear. <br>
#### Proof:
Let $x=(x_{1}, x_{2})$ and $y=(y_{1}, y_{2}) \in R^{2}$. Then $T(x_{1}, x_{2})=(x_{1}, -x_{2})$ and $T(y_{1}, y_{2})=(y_{1}, -y_{2}).$ Notice that<br>
(i) $T(x+y)=T[(x_{1}, x_{2})+(y_{1}, y_{2})]=T(x_{1}+y_{1}, x_{2}+y_{2})=(x_{1}+y_{1}, 0)$ and $T(x)+T(y)=(x_{1}, 0)+ (y_{1}, 0)=(x_{1}+y_{1}, 0).$ <br>
(ii) $T(αx)=T(αx_{1}, αx_{2})=(αx_{1}, 0)$ and
$αT(x)=α(x_{1}, 0)=(αx_{1}, 0).$ <br>

c). Let $T:R^{2}$ &rarr; $R^{2}$ such that $T(x, y)=(x, 0),$ where $x, y \in R.$ Then $T$ is linear. <br>
#### Proof:
Let $x=(x_{1}, x_{2})$ and $y=(y_{1}, y_{2}) \in R^{2}$. Then $T(x_{1}, x_{2})=(x_{1}, -x_{2})$ and $T(y_{1}, y_{2})=(y_{1}, -y_{2}).$ Notice that<br>
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
$ B= \{e_{1}, e_{2}, …, e_{n}\} $ is a basis for $V$ and let $x= r_{1}f_{1}+r_{2} e_{2}+ ... +r_{n}e_{n},$ where $x \in V, r_{1}, r_{2}, …, r_{2} \in R.$ Then $T(e_{1}), T(e_{2}), …, T(e_{n})$ define $T,$ by  $T(x)= rT(e_{1})+sT(e_{2})+  … +tT(e_{n}).$

#### 2. Matrix associated with a linear transformation:
Let T:R<sup>3</sup>→R<sup>2</sup> be a linear transformation. Let B<sub>1</sub>={f<sub>1</sub>, f<sub>2</sub>, f<sub>3</sub>} and B<sub>2</sub>={e<sub>1</sub>, e<sub>2</sub>} be basis of R<sup>3</sup> and R<sup>2</sup> respectively. Then T(f<sub>1</sub>)=ae<sub>1</sub>+be<sub>2</sub>, T(f<sub>2</sub>)=ce<sub>1</sub>+de<sub>2</sub> and T(f<sub>3</sub>)=ge<sub>1</sub>+he<sub>2</sub>, for some a, b, c, d, g, h&isin;R.

Let A=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

Then matrix A is of order 2×3 and is called the matrix representation of T w.r.t. the basis B<sub>1</sub> and B<sub>2</sub>.<br>
In a similar way, one can check that a matrix representation of T:R<sup>n</sup>→R<sup>m</sup> is of order m×n.

##### 2.1. Example:
Let T:R<sup>2</sup>→R<sup>2</sup> be a linear map defined as T(x, y)=(x, -y), where x, y&isin;R. Then find the matrix associated with the transformation w.r.t. the basis B<sub>1</sub>={(1, 0), (0,1)}and B<sub>2</sub>={(0, -1), (-1, 0)}.<br>
Let e<sub>1</sub>=(1, 0), e<sub>2</sub>=(0, 1), f<sub>1</sub>=(0, -1) and f<sub>2</sub>=(-1, 0). Thus <br>
T(1, 0)=(1, 0)=0.(0, -1)+(-1).(-1, 0)
T(0, 1)=(0, -1)= 1.(0, -1)+0.(-1, 0) and hence the matrix
representation of T w.r.t. the basis B<sub>1</sub> and B<sub>2</sub> is

#### 3. Linear transformation associated with a matrix:
Let A=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

be a matrix of order 2×3. Then the linear transformation T:R<sup>3</sup>→R<sup>2</sup> associated with the matrix w.r.t. the basis B<sub>1</sub>=>={f<sub>1</sub>, f<sub>2</sub>, f<sub>3</sub>} and B<sub>2</sub>= B<sub>2</sub>={e<sub>1</sub>, e<sub>2</sub>} of R<sup>3</sup>  and R<sup>2</sup>respectively can be obtained as follows:<br>
Define T(f<sub>1</sub>)=ae<sub>1</sub>+be<sub>2</sub>, T(f<sub>2</sub>)=ce<sub>1</sub>+de<sub>2</sub> and T(f<sub>3</sub>)=ge<sub>1</sub>+he<sub>2</sub>, where a, b, c, d, g, h&isin;R. Then for x&isin;V, there exist r, s, t&isin;R such that x=rf<sub>1</sub>+sf<sub>2</sub>+tf<sub>3</sub>. Thus define T(x)= rT(f<sub>1</sub>)+sT(f<sub>2</sub>)+tT(f<sub>3</sub>), because T has to be linear.

##### 3.1. Example:  
Consider A= $ \begin{pmatrix}1 & -1 & 0 \\\ 0 & 1 & 1\end{pmatrix} $

Then find the associated linear transformation of A w.r.t. the basis B<sub>1</sub>={(1, 0, 0), (-1, 1, 0), (0, 1, 1)} and B<sub>2</sub>={(-1, 1), (0, 1)} of R<sup>3</sup> and R<sup>2</sup> respectively.  <br>
Define T(1, 0, 0)=1(-1, 1)+0(0, 1)=(-1, 1), T(-1, 1, 0)=-1(-1, 1)+1(0, 1)=(1, 0) and T(0, 1, 1)=0(-1, 1)+1(0, 1)=(0, 1). Since (x, y, z)=a(1, 0, 0)+b(-1, 1, 0)+c(0, 1, 1), hence a-b=x, b+c=y and c=z. By solving these equations we get, a=x+y-z, b=y-z and c=z.<br>
Now, define  T:R<sup>3</sup>→R<sup>2</sup> by T(x, y, z)= aT(1, 0, 0)+bT(-1, 1, 0)+cT(0, 1, 1)=a(-1, 1)+b(1, 0)+c(0, 1)=(-a+b, a+c)=(-x, x+y), where x, y&isin;R.<br>
The linear transformation T:R<sup>3</sup>→R<sup>2</sup> associated with the matrix 2×3 A w.r.t. the basis B<sub>1</sub> and B<sub>2</sub> is T(x, y, z)=( -x, x+y), where x, y&isin;R.
