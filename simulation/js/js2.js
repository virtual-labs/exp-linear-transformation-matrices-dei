    let isSubmitted = false;
    let data = {};

    
    function showbasis(){
       
    // helper function
    const getVal = id => document.getElementById(id).value;

    // read values
    const ba = parseFloat(getVal('a'));
    const bc = parseFloat(getVal('c'));
    const bd = parseFloat(getVal('d'));
    const be = parseFloat(getVal('e'));
    const bf = parseFloat(getVal('f'));

    // empty check
    if ([ba, bc, bd, be, bf].some(v => isNaN(v))) {
        alert("Please enter all the values");
        return false;
    }

    // validation
    if (ba === 0) {
        alert("Enter valid basis");
        return false;
    }

    if (bc === 0 && be === 0) {
        alert("Please enter valid basis");
        return false;
    }

    const m = be / bc;
    if (bf === m * bd) {
        alert("Please enter valid basis");
        return false;
    }

        data = { ba, bc, bd, be, bf };
        isSubmitted = true;

        document.getElementById('displaybasis1').innerHTML = "<li><i>B</i><sub>1</sub> = {"+ba+"}, <i>B</i><sub>2</sub> = {("+bc +"," +bd +"), (" +be +"," +bf+")}</li>";
        
    }

    function showTransformation() {

    if (!isSubmitted) {
        alert("Please enter all values of bases and submit");
        return;
    }

    const { ba, bc, bd, be, bf } = data;

    document.getElementById('displayT').innerHTML = "<li><i>T</i>("+ba+") = ("+ba+", "+(3*ba)+") = &alpha;("+bc+", "+bd+") + &beta;("+be+", "+bf+")</li>";
        

        bt=(((ba*bd)-(3*ba*bc))/((be*bd)-(bc*bf)));
        al = (((3*ba)-(bt*bf))/bd);
        
        document.getElementById('alBt').innerHTML =" &emsp; &rArr; &alpha; = "+al+ ", &beta; = " +bt ;
        document.getElementById('displayT1').innerHTML ="<li>Matrix of <i>T</i> w.r.t. the bases <i>B</i><sub>1</sub> and <i>B</i><sub>2</sub> = </li> ";
        document.getElementById("mat").innerHTML=("\\[ \\begin{pmatrix} &alpha; \\\\ &beta; \\end{pmatrix} \\ =  \\begin{pmatrix} "+al+" \\\\ "+bt+" \\end{pmatrix} \\]");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
