function soma(num1, num2){
    return eval(num1)+eval(num2);
}
function subtração(num1, num2){
    return num1-num2;
}
function multiplicação(num1, num2){ /*dois parâmetros*/
    return num1*num2;
}
function divisão(num1, num2){
    return num1/num2;
}
function fatorial(num1) {
    var resultado = 1;
    for (var i=2;i<=num1;i++){
        resultado = resultado*i;
    }
    return resultado;
}
function neperiano(num1){
    var nep=2;
    if (num1==1){
        return nep;
    } else if(num1==0) {
        return nep-1;
    } else {
        for(var i=2;i<=num1;i++){
        nep += 1/fatorial(i-1);
        }
    }
    return nep;
}
function base2(num1){
    var aBase=[num1+1]; //+1 porque tem que ir até o número 5 = Math.pow(2,5)
    for (var i=0;i<=num1;i++){
        aBase[i]=Math.pow(2,i);
    }
    return aBase;
    
}
function base2Lista(num1){
    var aBase=[num1+1]; //+1 porque tem que ir até o número 5 = Math.pow(2,5)
    var texto="<ul>";
    for (var i=0;i<=num1;i++){
        aBase[i]=Math.pow(2,i);
        texto+="<li>"+aBase[i]+"</li>";
    }
    texto+="</ul>"
    return texto;
}
function baseBinaria(num1){
    var base2 = [];
    for (var i = 0; num1 > 1; i++){
        base2[i]=num1%2;
        num1 = Math.trunc(num1/2) //nummero inteiro como resultado
    }
    base2[base2.length] = 1; //o vetor tinha o tamnho 4, então a posição 5 = base2[4]
    base2.reverse();
    return base2.join('');  //o que separa os vetores
}
function baseOctal(num1){
    var base8 = [];
    for (var i = 0; num1 > 7; i++){
        base8[i] = num1%8;
        num1 = Math.trunc(num1/8);
    }
    base8[base8.length] = num1;
    base8.reverse();
    return base8.join('');
}
function baseHexadecimal(num1){
    var base16 = [];
    for (var i = 0; num1 > 15; i++){
        base16[i] = num1%16;
        num1 = Math.trunc(num1/16); //retorna a parte inteira do número
    }
    base16[base16.length] = num1;
    base16.reverse();
    for (var i = 0; i < base16.length; i++){
        if (base16[i]==10){
            base16[i]='A';
        } else if (base16[i]==11){
            base16[i]='B';
        } else if (base16[i]==12){
            base16[i]='C';
        } else if (base16[i]==13){
            base16[i]='D';
        } else if (base16[i]==14){
            base16[i]='E';
        } else if (base16[i]==15){
            base16[i]='F';
        } else {
            base16[i]=base16[i];
        }
    }
    return base16.join(''); //o que separa os vetores
}
function fibonacci(num1){
    var termos= num1;
    var resultado= [termos];
    resultado[0]=1;
    resultado[1]=1;
    for(var i = 2; i < termos; i++){
        resultado[i] = resultado[i-1] + resultado[i-2];   
    }
    return resultado.join(', ');
}
function raizQuadrada(num1, num2){
    var resultado= Math.pow(num1,1/num2);
    return resultado;
}
function potencialização(num1, num2){
    var resultado = Math.pow(num1, num2);
    return resultado;
}
function logaritmo(num1){
    var resultado= Math.log10(num1);
    return resultado;
}
function tangente(num1){
    var resultado= Math.tan(num1);
    return resultado;
}
function seno(num1){
    var resultado= Math.sin(num1);
    return resultado;
}
function coseno(num1){
    var resultado= Math.cos(num1);
    return resultado;
}
function apagar(){
    document.querySelector("#demo").value ="";
    document.querySelector("#num1").value ="";
    document.querySelector("#num2").value ="";
}
function produtoMatriz(num1){
    var matriz=[];
    for(var i=0; i<num1; i++){
        linha=[];
        for(var j=0; j<num1; j++){
            if(i<j){
                linha[j] = Math.pow(-1,i+j+2);
            } else if (i==j){
                linha[j] = 2*(i+1)+(j+1);
            } else if (i>j){
                linha[j] = i-j;
            }
        }
        matriz[i]=linha; 
    }
    console.table(matriz);

    var matriz2=[];
    for(var i=0; i<num1; i++){
        linha2=[];
        for(var j=0; j<num1; j++){
            if(i<j){
                linha2[j] = i-j;
            } else if (i==j){
                linha2[j] = 1;
            } else if (i>j){
                linha2[j] = Math.pow(-1,i-j);
            }
        }
        matriz2[i]=linha2; 
    }
    console.table(matriz2);

    var matrizProduto=[];
    for(var i=0; i<num1; i++){
        var matrizProdutoLinha=[];
        var mij=0;
        for(var j=0; j<num1; j++){
            for(var k=0; k<num1; k++){
                mij+=matriz[i][k]*matriz2[k][j];
            }
            matrizProdutoLinha[j]=mij;
            mij=0;
        }
        matrizProduto[i]=matrizProdutoLinha;
    }
    console.table(matrizProduto);
    return matrizProduto;
}
function inevrsoMatriz(num1){
    var matriz=[];
    for(var i=0; i<num1; i++){
        linha=[];
        for(var j=0; j<num1; j++){
            if(i<j){
                linha[j] = Math.pow(-1,i+j+2);
            } else if (i==j){
                linha[j] = 2*(i+1)+(j+1);
            } else if (i>j){
                linha[j] = i-j;
            }
        }
        matriz[i]=linha; 
    }
    console.table(matriz);

    //matriz identidade 
    for(var i=0; i<num1; i++){
        for(var j=0; j<num1; j++){
            if(i==j){
                matriz[i].push(1);
            }else{
                matriz[i].push(0);
            }
        }
    }
    console.table(matriz);

    //inversão da matriz
    for(var k=0; k<num1; k++){
        for(var i=0; i<num1; i++){
            var pivo = matriz[i][k];
            var mkk = matriz[k][k];
            for(var j=k; j<2*num1; j++){
                matriz[k][j] = matriz[k][j]/mkk;
                if(i!=k){
                    matriz[i][j]=-pivo*matriz[k][j]+matriz[i][j];
                }
            }
        }
    }
    console.table(matriz);
    return matriz;
}  

function imprimeParagrafo(par1, par2, op){
    if (op==1){
        document.getElementById("demo").value =soma(par1,par2);
    } else if (op==2){
        document.getElementById("demo").value =subtração(par1,par2);
    } else if (op==3){
        document.getElementById("demo").value =multiplicação(par1,par2);
    } else if (op==4){
        document.getElementById("demo").value =divisão(par1,par2);
    } else if (op==5){
        document.getElementById("demo").value =fatorial(par1);
    } else if (op==6){
        document.getElementById("demo").value =neperiano(par1);
    } else if (op==7){
        document.getElementById("demo").value =base2(par1);
    } else if (op==8){
        document.getElementById("demo").value =baseBinaria(par1);
    }else if (op==9){
        document.getElementById("demo").value =baseOctal(par1);
    }else if (op==10){
        document.getElementById("demo").value =baseHexadecimal(par1);
    }else if (op==11){
        document.getElementById("demo").value =fibonacci(par1);
    }else if (op==12){
        document.getElementById("demo").value =raizQuadrada(par1, par2);
    }else if (op==13){
        document.getElementById("demo").value =potencialização(par1, par2);
    }else if (op==14){
        document.getElementById("demo").value =logaritmo(par1);
    }else if (op==15){
        document.getElementById("demo").value =seno(par1);
    }else if (op==16){
        document.getElementById("demo").value =coseno(par1);
    }else if (op==17){
        document.getElementById("demo").value =tangente(par1);
    }else if (op==18){
        document.getElementById("demo").value =produtoMatriz(par1);
    }else if (op==19){
        document.getElementById("demo").value =inevrsoMatriz(par1);
    }
}