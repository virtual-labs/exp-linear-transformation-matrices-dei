    function sbmtmatrix(){
        var aval=parseFloat(document.getElementById('a').value);
        var bval=parseFloat(document.getElementById('b').value);
        var cval=parseFloat(document.getElementById('c').value);
        var dval=parseFloat(document.getElementById('d').value);
        if(document.getElementById('a').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('b').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('c').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('d').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }

        document.getElementById("displaymatrix").innerHTML=("\\[ A&ensp;&equiv;&ensp;\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\ =  \\begin{pmatrix} "+aval+ " & " +bval+" \\\\ "+cval+ " & " +dval+" \\end{pmatrix} \\]");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }

    function sbmtb1(){
        var f11val=parseFloat(document.getElementById('f11').value);
        var f12val=parseFloat(document.getElementById('f12').value);
        var f21val=parseFloat(document.getElementById('f21').value);
        var f22val=parseFloat(document.getElementById('f22').value);
        if(document.getElementById('f11').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('f12').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('f21').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('f22').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        var m1 = parseFloat(m1);
        m1 = f21val/f11val;
        if(f22val == (m1*f12val)){
            alert("Enter valid basis");
            return false
        }

        if(f11val == 0){
            if (f21val == 0){
                alert("Please enter the valid basis");
                return false
            }
        }
        document.getElementById("displayb1").innerHTML="B<sub>1</sub> = {("+f11val+", "+f12val+"), ("+f21val+", "+f22val+")}";
    }
    function sbmtb2(){
        var e11val=parseFloat(document.getElementById('e11').value);
        var e12val=parseFloat(document.getElementById('e12').value);
        var e21val=parseFloat(document.getElementById('e21').value);
        var e22val=parseFloat(document.getElementById('e22').value);
        if(document.getElementById('e11').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e12').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e21').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e22').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }

        var m2 = parseFloat(m2);
        m2 = e21val/e11val;
        if(e22val == (m2*e12val)){
            alert("Please enter the valid basis");
            return false
        }

        if(e11val == 0){
            if (e21val == 0){
                alert("Please enter the valid basis");
                return false
            }
        }

        document.getElementById("displayb2").innerHTML="B<sub>2</sub> = {("+e11val+", "+e12val+"), ("+e21val+", "+e22val+")}";
    }
    
    function ltdetails(){

        var aval=parseFloat(document.getElementById('a').value);
        var bval=parseFloat(document.getElementById('b').value);
        var cval=parseFloat(document.getElementById('c').value);
        var dval=parseFloat(document.getElementById('d').value);
        var f11val=parseFloat(document.getElementById('f11').value);
        var f12val=parseFloat(document.getElementById('f12').value);
        var f21val=parseFloat(document.getElementById('f21').value);
        var f22val=parseFloat(document.getElementById('f22').value);
        var e11val=parseFloat(document.getElementById('e11').value);
        var e12val=parseFloat(document.getElementById('e12').value);
        var e21val=parseFloat(document.getElementById('e21').value);
        var e22val=parseFloat(document.getElementById('e22').value);

        if(document.getElementById('a').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('b').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('c').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }
        if(document.getElementById('d').value.length==0){
            alert("Please enter all the values of the matrix");
            return false
        }

        if(document.getElementById('f11').value.length==0){
            alert("Please, Enter the basis");
            return false
        }
        if(document.getElementById('f12').value.length==0){
            alert("Please, Enter the basis");
            return false
        }
        if(document.getElementById('f21').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('f22').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e11').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e12').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e21').value.length==0){
            alert("Please enter all the values of the basis");
            return false
        }
        if(document.getElementById('e22').value.length==0){
            alert("Please, Enter the basis");
            return false
        }

        document.getElementById('explain').innerHTML="<a id='explain' onclick='explain()'>See Explanation:</a> ";

        var tf1val1=(aval*e11val)+(cval*e21val);
        var tf1val2=(aval*e12val)+(cval*e22val);
        var tf2val1=(bval*e11val)+(dval*e21val);
        var tf2val2=(bval*e12val)+(dval*e22val);

        document.getElementById('lt').innerHTML="T(x) = ("+tf1val1+"x<sub>1</sub> + "+tf2val1+"x<sub>2</sub> , "+tf1val2+"x<sub>1</sub> + "+tf2val2+"x<sub>2</sub>)";
        
        
    }
    function explain(){

        var aval=parseFloat(document.getElementById('a').value);
        var bval=parseFloat(document.getElementById('b').value);
        var cval=parseFloat(document.getElementById('c').value);
        var dval=parseFloat(document.getElementById('d').value);
        var f11val=parseFloat(document.getElementById('f11').value);
        var f12val=parseFloat(document.getElementById('f12').value);
        var f21val=parseFloat(document.getElementById('f21').value);
        var f22val=parseFloat(document.getElementById('f22').value);
        var e11val=parseFloat(document.getElementById('e11').value);
        var e12val=parseFloat(document.getElementById('e12').value);
        var e21val=parseFloat(document.getElementById('e21').value);
        var e22val=parseFloat(document.getElementById('e22').value);

        var tf1val1=(aval*e11val)+(cval*e21val);
        var tf1val2=(aval*e12val)+(cval*e22val);
        var tf2val1=(bval*e11val)+(dval*e21val);
        var tf2val2=(bval*e12val)+(dval*e22val);

        document.getElementById('x1x2').innerHTML="<ul><li>Let x &equiv; (x<sub>1</sub>, x<sub>2</sub>) &isin; R<sup>2</sup> & let x = x<sub>1</sub>f<sub>1</sub> + x<sub>2</sub>f<sub>2</sub></li></ul>";

        document.getElementById('tx').innerHTML="<ul><li>So that T(x) = x<sub>1</sub>T(f<sub>1</sub>) + x<sub>2</sub>T(f<sub>2</sub>)</li></ul>";
        

        document.getElementById('tf1').innerHTML="<ul><li>Defining T(f<sub>1</sub>) = ae<sub>1</sub> + ce<sub>2</sub> = T("+f11val+" , "+f12val+") = "+aval+"("+e11val+" , "+e12val+") + "+cval+"("+e21val+" , "+e22val+")</li></ul>";
        document.getElementById('tf2').innerHTML="&ensp; &nbsp;&ensp; and T(f<sub>2</sub>) = be<sub>1</sub> + de<sub>2</sub> = T("+f21val+" , "+f22val+") = "+bval+"("+e11val+" , "+e12val+") + "+dval+"("+e21val+" , "+e22val+")";
       
        var tf1val1=(aval*e11val)+(cval*e21val);
        var tf1val2=(aval*e12val)+(cval*e22val);
        var tf2val1=(bval*e11val)+(dval*e21val);
        var tf2val2=(bval*e12val)+(dval*e22val);

        document.getElementById('tx1').innerHTML="<ul><li>T(x) = x<sub>1</sub>("+tf1val1+" , "+tf1val2+") + x<sub>2</sub>("+tf2val1+" , "+tf2val2+")</li></ul>";

    }
