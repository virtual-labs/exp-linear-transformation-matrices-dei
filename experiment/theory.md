<span style="font-family: 'Times New Roman'; font-size: 22px;">This experiment helps students understand what a linear transformation is and how it is related to matrices. The experiment shows that every linear transformation can be written using a matrix and vice-versa, which makes it easier to work with. By doing this, students learn how matrices can be used to represent transformations and apply these in various contexts in a simple and clear way.</span>
#### <span style="font-family: 'Times New Roman'; font-size: 22px;">1. Linear transformation:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then a function <i>T</i>: <i>M→N</i> is called a linear transformation if, for <i>x</i>, y</i>&isin;<i>M</i> and <i>α</i>&isin;<i>R</i> <br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>) <br>
(ii) <i>T</i>(<i>αx</i>)=<i>αT</i>(<i>x</i>)</span>

![Linear transformaion](images/exp5image1.PNG "Linear transformaion")<br>
##### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.1. Identity transformation:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>M</i> be a vector space over a field <i>R</i>. Then the function <i>T</i>: <i>M→M</i> defined as <i>T</i>(<i>x</i>)=<i>x</i>, where <i>x</i>&isin;<i>M</i>, is linear and is known as identity transformation.</span>

![Identity transformaion](images/exp5image3.PNG "Identity transformaion")<br>
##### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.2. Zero transformation:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>M</i> and <i>N</i> be vector spaces over a field <i>R</i>. Then the function <i>T</i>: <i>M→N</i> defined as <i>T</i>(<i>x</i>)=0, where <i>x</i>&isin;<i>M</i>, is linear and is known as zero transformation.</span>

![Zero transformaion](images/exp5image2.PNG "Zero transformaion")<br>
##### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.3. Example:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">a). Let <i>T</i>: <i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> such that <i>T</i>(<i>x</i>, y<i>)=(<i>x</i>, -y</i>), where <i>x, y</i>&isin;<i>R</i>. Then <i>T</i> is linear.<br>
<b>Proof:</b>
Let <i>x</i>=(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>) and <i>y</i>=(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)&isin;<i>R</i><sup>2</sup>. Then <i>T</i>(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)=(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>) and
<i>T</i>(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)=(<i>y</i><sub>1</sub>, -<i>y</i><sub>2</sub>). Notice that<br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>((<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)+(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>))=<i>T</i>(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)=(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, -(<i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)) and <i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>)=(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>)+ (<i>y</i><sub>1</sub>, -<i>y</i><sub>2</sub>)= (<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, -(<i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)). <br>
(ii) <i>T</i>(<i>αx</i>)=<i>T</i>(<i>αx</i><sub>1</sub>, <i>αx</i><sub>2</sub>)=(<i>αx</i><sub>1</sub>, -<i>αx</i><sub>2</sub>) and
<i>αT</i>(<i>x</i>)=<i>α</i>(<i>x</i><sub>1</sub>, -<i>x</i><sub>2</sub>)=(<i>αx</i><sub>1</sub>, -<i>αx</i><sub>2</sub>). <br></span>

<span style="font-family: 'Times New Roman'; font-size: 22px;">b). Let <i>T</i>: <i>R</i><sup>2</sup> &rarr; <i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>x</i>, 0), where <i>x, y</i> &isin; <i>R</i>. Then <i>T</i> is linear. <br>
<b>Proof:</b>
Let <i>x</i>=(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>) and <i>y</i>=(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>) &isin;<i>R</i><sup>2</sup>. Then <i>T</i>(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)=(<i>x</i><sub>1</sub>, 0) and <i>T</i>(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)=(<i>y</i><sub>1</sub>, 0). Notice that<br>
(i) <i>T</i>(<i>x</i>+<i>y</i>)=<i>T</i>((<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)+(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>))=<i>T</i>(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)=(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, 0) and <i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>)=(<i>x</i><sub>1</sub>, 0)+ (<i>y</i><sub>1</sub>, 0)=(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, 0). <br>
(ii) <i>T</i>(<i>αx</i>)=<i>T</i>(<i>αx</i><sub>1</sub>, α<i>x</i><sub>2</sub>)=(<i>αx</i><sub>1</sub>, 0) and
<i>αT</i>(<i>x</i>)=α(<i>x</i><sub>1</sub>, 0)=(<i>αx</i><sub>1</sub>, 0). <br></span>

<span style="font-family: 'Times New Roman'; font-size: 22px;">c). Let <i>T:R</i><sup>2</sup> &rarr; <i>R</i><sup>2</sup> such that <i>T</i>(<i>x, y</i>)=(<i>y</i>, <i>x</i>), where <i>x</i>, y</i>&isin;<i>R</i>. Then <i>T</i> is linear. <br>
<b>Proof:</b>
Let <i>x</i>=(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)</i> and <i>y</i>=(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)</i> &isin;<i>R</i><sup>2</sup>. Then <i>T</i>(<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)=(<i>x</i><sub>2</sub>, <i>x</i><sub>1</sub>)</i> and <i>T</i>(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>)=(<i>y</i><sub>2</sub>, <i>y</i><sub>1</sub>). Notice that<br>
(i) <i>T</i>(x+y)=<i>T</i>((<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>)+(<i>y</i><sub>1</sub>, <i>y</i><sub>2</sub>))=<i>T</i>(<i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>)=( <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>, <i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>) and
<i>T</i>(<i>x</i>)+<i>T</i>(<i>y</i>)=(<i>x</i><sub>2</sub>, <i>x</i><sub>1</sub>)+ (<i>y</i><sub>2</sub>, <i>y</i><sub>1</sub>)= ( <i>x</i><sub>2</sub>+<i>y</i><sub>2</sub>, <i>x</i><sub>1</sub>+<i>y</i><sub>1</sub>). <br>
(ii) <i>T</i>(<i>αx</i>)=<i>T</i>(<i>αx</i><sub>1</sub>, α<i>x</i><sub>2</sub>)=(<i>αx</i><sub>2</sub>, α<i>x</i><sub>1</sub>) and
α<i>T</i>(<i>x</i>)=α(<i>x</i><sub>2</sub>, <i>x</i><sub>1</sub>)=(<i>αx</i><sub>2</sub>, α<i>x</i><sub>1</sub>).</span>

##### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.4. Proposition:</span>
  <span style="font-family: 'Times New Roman'; font-size: 22px;"> Let <i>T:M→N</i> be a linear transformation. Then <br>
   (i) <i>T</i>(0)=0; where 0 on the L.H.S is the zero vector of <i>M</i> and 0 on the R.H.S is the zero vector of  <i>N.</i> <br>
   (ii) <i>T</i>(-<i>x</i>)=-<i>T</i>(<i>x</i>), for all <i>x</i> &isin; <i>M</i> <br>
   (iii) <i>T</i>(<i>x-y</i>)=<i>T</i>(<i>x</i>)-<i>T</i>(<i>y</i>), for all <i>x</i>, <i>y</i> &isin; <i>M</i><br>
   (iv) <i>T</i>(<i>αx+βy</i>)=<i>αT</i>(<i>x</i>)+<i>βT</i>(<i>y</i>), for all <i>x</i>, <i>y</i> &isin; <i>M</i> and <i>α, β</i> &isin; <i>R</i><br></span>

##### <span style="font-family: 'Times New Roman'; font-size: 22px;">1.5. Proposition:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>T</i>:<i>V</i>→<i>W</i> be a linear map and <i>V</i> and <i>W</i> be finite dimensional vector spaces over <i>R</i> and <i>B</i>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>, …, <i>e</i><sub>n</sub>} is a basis for <i>V</i> and let <i>x</i>= <i>r</i><sub>1</sub><i>f</i><sub>1</sub>+<i>r</i><sub>2</sub> <i>e</i><sub>2</sub>+ ... +<i>r</i><sub>n</sub><i>e</i><sub>n</sub>, where <i>x</i> &isin;<i>V</i>, <i>r</i><sub>1</sub>, <i>r</i><sub>2</sub>, …, <i>r</i><sub>2</sub> &isin;<i>R</i>. Then <i>T</i>(<i>e</i><sub>1</sub>), <i>T</i>(<i>e</i><sub>2</sub>), …, <i>T</i>(<i>e</i><sub>n</sub>) define <i>T</i>, by <i>T</i>(<i>x</i>)=<i>r</i><i>T</i>(<i>e</i><sub>1</sub>)+<i>s</i><i>T</i>(<i>e</i><sub>2</sub>)+  … +<i>t</i><i>T</i>(<i>e</i><sub>n</sub>).</span>

#### <span style="font-family: 'Times New Roman'; font-size: 22px;">2. Matrix associated with a linear transformation:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> be a linear transformation. Let <i>B</i><sub>1</sub>={<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, <i>f</i><sub>3</sub>} and <i>B</i><sub>2</sub>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} be basis of <i>R</i><sup>3</sup> and <i>R</i><sup>2</sup> respectively. Then <i>T</i>(<i>f</i><sub>1</sub>)=<i>ae</i><sub>1</sub>+<i>be</i><sub>2</sub>, <i>T</i>(<i>f</i><sub>2</sub>)=<i>ce</i><sub>1</sub>+<i>de</i><sub>2</sub> and <i>T</i>(<i>f</i><sub>3</sub>)=<i>ge</i><sub>1</sub>+<i>he</i><sub>2</sub>, for some <i>a, b, c, d, g, h</i>&isin;<i>R</i>.<br><br>
Set <i>A</i>=</span> $ \begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Then matrix <i>A</i> is of order 2×3 and is called the matrix representation of <i>T</i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub>.<br>
In a similar way, one can check that a matrix representation of <i>T</i>: <i>R</i><sup><i>n</i></sup>→<i>R</i><sup><i>m</i></sup> is of order <i>m</i>×<i>n</i>.</span>

##### <span style="font-family: 'Times New Roman'; font-size: 22px;">2.1. Example:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>T</i>: <i>R</i><sup>2</sup>→<i>R</i><sup>2</sup> be a linear map defined as <i>T</i>(<i>x</i>, y</i>)=(<i>x</i>, -y</i>), where <i>x</i>, y</i>&isin;<i>R</i>. Then find the matrix associated with the transformation w.r.t. the basis <i>B</i><sub>1</sub>={(1, 0), (0,1)} and <i>B</i><sub>2</sub>={(0, -1), (-1, 0)}.<br>
Let <i>e</i><sub>1</sub>=(1, 0), <i>e</i><sub>2</sub>=(0, 1), <i>f</i><sub>1</sub>=(0, -1) and <i>f</i><sub>2</sub>=(-1, 0). Thus <br>
<i>T</i>(1, 0)=(1, 0)=0.(0, -1)+(-1).(-1, 0)
<i>T</i>(0, 1)=(0, -1)= 1.(0, -1)+0.(-1, 0) and hence the matrix</span>
representation of <i>T</i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> is
A = $ \begin{pmatrix}0 & 1 \\ -1 & 0 \end{pmatrix} $

#### <span style="font-family: 'Times New Roman'; font-size: 22px;">3. Linear transformation associated with a matrix:</span>
<span style="font-family: 'Times New Roman'; font-size: 22px;">Let <i>A</i>=</span> $ \begin{pmatrix}a & c & e \\\ b & d & f\end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">be a matrix of order 2×3. Then the linear transformation <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> associated with the matrix w.r.t. the basis <i>B</i><sub>1</sub>={<i>f</i><sub>1</sub>, <i>f</i><sub>2</sub>, <i>f</i><sub>3</sub>} and <i>B</i><sub>2</sub>={<i>e</i><sub>1</sub>, <i>e</i><sub>2</sub>} of <i>R</i><sup>3</sup>  and <i>R</i><sup>2</sup>respectively can be obtained as follows:<br>
Define <i>T</i>(<i>f</i><sub>1</sub>)=<i>ae</i><sub>1</sub>+<i>be</i><sub>2</sub>, <i>T</i>(<i>f</i><sub>2</sub>)=<i>ce</i><sub>1</sub>+<i>de</i><sub>2</sub> and <i>T</i>(<i>f</i><sub>3</sub>)=<i>ge</i><sub>1</sub>+<i>he</i><sub>2</sub>, where <i>a, b, c, d, g, h</i>&isin;<i>R</i>. Then for <i>x</i>&isin;<i>V</i>, there exist <i>r, s, t</i>&isin;<i>R</i> such that <i>x</i>=<i>rf</i><sub>1</sub>+<i>sf</i><sub>2</sub>+<i>tf</i><sub>3</sub>. Thus define <i>T</i>(<i>x</i>)=<i>rT</i>(<i>f</i><sub>1</sub>)+<i>sT</i>(<i>f</i><sub>2</sub>)+<i>tT</i>(<i>f</i><sub>3</sub>), because <i>T</i> has to be linear.</span>

##### <span style="font-family: 'Times New Roman'; font-size: 22px;">3.1. Example:</span>  
<span style="font-family: 'Times New Roman'; font-size: 22px;">Consider <i>A</i></span> = $ \begin{pmatrix}1 & -1 & 0 \\\ 0 & 1 & 1\end{pmatrix} $

<span style="font-family: 'Times New Roman'; font-size: 22px;">Then find the associated linear transformation of <i>A</i> w.r.t. the basis <i>B</i><sub>1</sub>={(1, 0, 0), (-1, 1, 0), (0, 1, 1)} and <i>B</i><sub>2</sub>={(-1, 1), (0, 1)} of <i>R</i><sup>3</sup> and <i>R</i><sup>2</sup> respectively.  <br>
Define <i>T</i>(1, 0, 0)=1(-1, 1)+0(0, 1)=(-1, 1), <i>T</i>(-1, 1, 0)=-1(-1, 1)+1(0, 1)=(1, 0) and <i>T</i>(0, 1, 1)=0(-1, 1)+1(0, 1)=(0, 1). Since (<i>x, y, z</i>)=<i>a</i>(1, 0, 0)+<i>b</i>(-1, 1, 0)+<i>c</i>(0, 1, 1), hence <i>a</i>-<i>b</i>=<i>x</i>, <i>b</i>+<i>c</i>=<i>y</i> and <i>c</i>=<i>z</i>. By solving these equations we get, <i>a</i>=<i>x</i>+<i>y</i>-<i>z</i>, <i>b</i>=<i>y</i>-<i>z</i> and <i>c</i>=<i>z</i>.<br>
Now, define  <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> by <i>T</i>(<i>x</i>, y, z</i>)= <i>aT</i>(1, 0, 0)+<i>bT</i>(-1, 1, 0)+<i>cT</i>(0, 1, 1)=<i>a</i>(-1, 1)+<i>b</i>(1, 0)+<i>c</i>(0, 1)=(-<i>a</i>+<i>b</i>, <i>a</i>+<i>c</i>)=(-<i>x</i>, <i>x</i>+<i>y</i>), where <i>x, y</i>&isin;<i>R</i>.<br>
The linear transformation <i>T</i>: <i>R</i><sup>3</sup>→<i>R</i><sup>2</sup> associated with the matrix 2×3 <i>A</i> w.r.t. the basis <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> is <i>T</i>(<i>x</i>, <i>y</i>, <i>z</i>)=(-<i>x</i>, <i>x</i>+<i>y</i>), where <i>x, y</i>&isin;<i>R</i>.</span>
