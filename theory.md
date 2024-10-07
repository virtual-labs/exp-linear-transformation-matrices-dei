#### 1. Linear transformation:
Let M and N be vector spaces over a field R. Then a function T:M→N is called a linear transformation if, for x, y&isin;M and α&isin;R <br>
(i) T(x+y)=T(x)+T(y) <br>
(ii) T(αx)=αT(x)

#### 2. Identity transformation:
Let M be a vector space over a field R. Then the function T:M→M defined as T(x)=x, where x&isin;M, is linear and is known as identity transformation.

#### 3. Zero transformation:
Let M and N be vector spaces over a field R. Then the function T:M→N defined as T(x)=0, where x&isin;M, is linear and is known as zero transformation.

#### 4. Examples:
1. Let T: R<sup>2</sup>→R<sup>2</sup> such that T(x, y)=(x, -y), where x, y&isin;R. Then T is linear.

#### &emsp;  Proof:
&emsp; Let x=(x<sub>1</sub>, x<sub>2</sub>)and y=(y<sub>1</sub>, y<sub>2</sub>)&isin;R,<sup>2</sup>. Then T(x<sub>1</sub>, x<sub>2</sub>)=(x<sub>1</sub>, -x<sub>2</sub>) and
T(y<sub>1</sub>, y<sub>2</sub>)=(y<sub>1</sub>, -y<sub>2</sub>). Notice that<br>
&emsp; (i)T(x+y)=T[(x, x<sub>2</sub>)+(y<sub>1</sub>, y<sub>2</sub>)]=T(x<sub>1</sub>+y<sub>1</sub>, x<sub>2</sub>+y<sub>2</sub>)=(x<sub>1</sub>+y<sub>1</sub>, -( x<sub>2</sub>+y<sub>2</sub>)) and T(x)+T(y)=(x<sub>1</sub>, -x<sub>2</sub>)+ (y<sub>1</sub>, -y<sub>2</sub>)= (x<sub>1</sub>+y<sub>1</sub>, -( x<sub>2</sub>+y<sub>2</sub>).<br>
&emsp; (ii) T(αx)=T(αx<sub>1</sub>, αx<sub>2</sub>)=(αx<sub>1</sub>, -αx<sub>2</sub>) and
αT(x)=α(x<sub>1</sub>, -x<sub>2</sub>)=(αx<sub>1</sub>, -αx<sub>2</sub>).<br>

2. Let T:R<sup>2</sup>&rarr;R<sup>2</sup> such that T(x, y)=(x, 0), where x, y&isin;R. Then T is linear. <br>
#### &emsp;  Proof:
&emsp; Let x=(x<sub>1</sub>, x<sub>2</sub>) and y=(y<sub>1</sub>, y<sub>2</sub>)&isin;R,<sup>2</sup>. Then T(x<sub>1</sub>, x<sub>2</sub>)=(x<sub>1</sub>, -x<sub>2</sub>) and
&emsp; T(y<sub>1</sub>, y<sub>2</sub>)=(y<sub>1</sub>, -y<sub>2</sub>). Notice that<br>
&emsp;(i) T(x+y)=T[(x<sub>1</sub>, x<sub>2</sub>)+(y<sub>1</sub>, y<sub>2</sub>)]=T(x<sub>1</sub>+y<sub>1</sub>, x<sub>2</sub>+y<sub>2</sub>)=(x<sub>1</sub>+y<sub>1</sub>, 0) and T(x)+T(y)=(x<sub>1</sub>, 0)+ (y<sub>1</sub>, 0)=(x<sub>1</sub>+y<sub>1</sub>, 0). <br>
&emsp;(ii) T(αx)=T(αx<sub>1</sub>, αx<sub>2</sub>)=(αx<sub>1</sub>, 0) and
αT(x)=α(x<sub>1</sub>, 0)=(αx<sub>1</sub>, 0).<br>

3. Let T:R<sup>2</sup>&rarr;R<sup>2</sup> such that T(x, y)=(x, 0), where x, y&isin;R. Then T is linear. <br>
#### &emsp;  Proof:
&emsp; Let x=(x<sub>1</sub>, x<sub>2</sub>) and y=(y<sub>1</sub>, y<sub>2</sub>)&isin;R,<sup>2</sup>. Then T(x<sub>1</sub>, x<sub>2</sub>)=(x<sub>1</sub>, -x<sub>2</sub>) and
&emsp;T(y<sub>1</sub>, y<sub>2</sub>)=(y<sub>1</sub>, -y<sub>2</sub>). Notice that<br>
&emsp;(i) T(x+y)=T[(x<sub>1</sub>, x<sub>2</sub>)+(y<sub>1</sub>, y<sub>2</sub>)]=T(x<sub>1</sub>+y<sub>1</sub>, x<sub>2</sub>+y<sub>2</sub>)=( x<sub>2</sub>+y<sub>2</sub>, x<sub>1</sub>+y<sub>1</sub>) and
T(x)+T(y)=(-x<sub>2</sub>, x<sub>1</sub>)+ (-y<sub>2</sub>, y<sub>1</sub>)= ( x<sub>2</sub>+y<sub>2</sub>, x<sub>1</sub>+y<sub>1</sub>).<br>
&emsp;(ii) T(αx)=T(αx<sub>1</sub>, αx<sub>2</sub>)=(αx<sub>1</sub>, -αx<sub>2</sub>) and
αT(x)=α(x<sub>2</sub>, x<sub>1</sub>)=(αx<sub>1</sub>, -αx<sub>2</sub>).

#### 5. Proposition:
   Let T:M→N be a linear transformation. Then <br>
   (i) T(0)=0; where 0 on the L.H.S is the zero vector of M and 0 on the R.H.S is the zero vector of  N. <br>
   (ii) T(-x)=-T(x), for all x&isin;M <br>
   (iii) T(x-y)=T(x)-T(y), for all x, y&isin;M<br>
   (iv) T(αx+βy)=αT(x)+βT(y), for all x, y&isin;M and    α, β&isin;R<br>

#### 6. Proposition:
Let T:V→W be a linear map and V and W be finite dimensional vector spaces over R and <br>
B={e<sub>1</sub>, e<sub>2</sub>, …, e<sub>n</sub>} is a basis for V and let x= r<sub>1</sub>f<sub>1</sub>+r<sub>2</sub> e<sub>2</sub>+ ... +r<sub>n</sub>e<sub>n</sub>, where x&isin;V, r<sub>1</sub>, r<sub>2</sub>, …, r<sub>n</sub>&isin;R. Then T(e<sub>1</sub>), T(e<sub>2</sub>), …, T(e<sub>n</sub>) define T, by  T(x)= rT(e<sub>1</sub>)+sT(e<sub>2</sub>)+  … +t….T(e<sub>n</sub>) .

#### 7. Matrix associated with a linear transformation:
Let T:R<sup>3</sup>→R<sup>2</sup> be a linear transformation. Let B<sub>1</sub>={f<sub>1</sub>, f<sub>2</sub>, f<sub>3</sub>} and B<sub>2</sub>={e<sub>1</sub>, e<sub>2</sub>}be bases of R<sup>2</sup> and R<sup>2</sup> respectively. Then T(f<sub>1</sub>)=ae<sub>1</sub>+be<sub>2</sub>, T(f<sub>2</sub>)=ce<sub>1</sub>+de<sub>2</sub> and T(f<sub>3</sub>)=ge<sub>1</sub>+he<sub>2</sub>, for some a, b, c, d, g, h&isin;R.

Let A=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

Then matrix A is of order 2×3 and is called the matrix representation of T w.r.t. the basis B<sub>1</sub> and B<sub>2</sub>.<br>
In a similar way, one can check that a matrix representation of T:R<sup>n</sup>→R<sup>m</sup> is of order m×n.

#### 8. Example:
Let T:R<sup>2</sup>→R<sup>2</sup> be a linear map defined as T(x, y)=(x, -y), where x, y&isin;R. Then find the matrix associated with the transformation w.r.t. the basis B<sub>1</sub>={(1, 0), (0,1)}and B<sub>2</sub>={(0, -1), (-1, 0)}.<br>
Let e<sub>1</sub>=(1, 0), e<sub>2</sub>=(0, 1), f<sub>1</sub>=(0, -1) and f<sub>2</sub>=(-1, 0). Thus <br>
T(1, 0)=(1, 0)=0.(0, -1)+(-1).(-1, 0)
T(0, 1)=(0, -1)= 1.(0, -1)+0.(-1, 0) and hence the matrix
representation of T w.r.t. the basis B<sub>1</sub> and B<sub>2</sub> is

#### 9. Linear transformation associated with a matrix:
Let A=

$$\begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix}$$

be a matrix of order 2×3. Then the linear transformation T:R<sup>3</sup>→R<sup>2</sup> associated with the matrix w.r.t. the basis B<sub>1</sub>=>={f<sub>1</sub>, f<sub>2</sub>, f<sub>3</sub>} and B<sub>2</sub>= B<sub>2</sub>={e<sub>1</sub>, e<sub>2</sub>} of R<sup>3</sup>  and R<sup>2</sup>respectively can be obtained as follows:<br>
Define T(f<sub>1</sub>)=ae<sub>1</sub>+be<sub>2</sub>, T(f<sub>2</sub>)=ce<sub>1</sub>+de<sub>2</sub> and T(f<sub>3</sub>)=ge<sub>1</sub>+he<sub>2</sub>, where a, b, c, d, g, h&isin;R. Then for x&isin;V, there exist r, s, t&isin;R such that x=rf<sub>1</sub>+sf<sub>2</sub>+tf<sub>3</sub>. Thus define T(x)= rT(f<sub>1</sub>)+sT(f<sub>2</sub>)+tT(f<sub>3</sub>), because T has to be linear.

#### 10. Example:  
Consider A=

$$\begin{pmatrix}1 & -1 & 0 \\\ 0 & 1 & 1\end{pmatrix}$$

Then find the associated linear transformation of A w.r.t. the basis B<sub>1</sub>={(1, 0, 0), (-1, 1, 0), (0, 1, 1)} and B<sub>2</sub>={(-1, 1), (0, 1)} of R<sup>3</sup> and R<sup>2</sup> respectively.  <br>
Define T(1, 0, 0)=1(-1, 1)+0(0, 1)=(-1, 1), T(-1, 1, 0)=-1(-1, 1)+1(0, 1)=(1, 0) and T(0, 1, 1)=0(-1, 1)+1(0, 1)=(0, 1). Since (x, y, z)=a(1, 0, 0)+b(-1, 1, 0)+c(0, 1, 1), hence a-b=x, b+c=y and c=z. By solving these equations we get, a=x+y-z, b=y-z and c=z.<br>
Now, define  T:R<sup>3</sup>→R<sup>2</sup> by T(x, y, z)= aT(1, 0, 0)+bT(-1, 1, 0)+cT(0, 1, 1)=a(-1, 1)+b(1, 0)+c(0, 1)=(-a+b, a+c)=(-x, x+y), where x, y&isin;R.<br>
The linear transformation T:R<sup>3</sup>→R<sup>2</sup> associated with the matrix 2×3 A w.r.t. the basis B<sub>1</sub> and B<sub>2</sub> is T(x, y, z)=( -x, x+y), where x, y&isin;R.
