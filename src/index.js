module.exports = function toReadable (number) {
        let a= number.toString().split('');
        let b=a.length;
        const n1=['zero' , 'one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven', 'eight', 'nine'];
        const n10=['' , 'eleven', 'twelve', 'thirteen' , 'fourteen' , 'fifteen', 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen'];
        const n20=['' , 'ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        const n100=['' , 'one hundred' , 'two hundred' , 'three hundred' , 'four hundred' , 'five hundred' , 'six hundred' , 'seven hundred' , 'eight hundred' , 'nine hundred'];
        if (b==3){
            if (a[1]==0 && a[2]==0){
                return n100[a[0]];
            }   else if (a[1]==0){
                    return n100[a[0]] + ' ' + n1[a[2]];
            }   else if (a[2]==0){
                    return n100[a[0]] + ' ' + n20[a[1]];
            }   else if (a[1]==1 && a[2]!=0){
                    return n100[a[0]] + ' ' + n10[a[2]];
            }   else {
                    return n100[a[0]] + ' ' + n20[a[1]] + ' ' + n1[a[2]];}
        } else if (b==2){
            if (a[1]==0){
                return n20[a[0]];
            }   else if (a[0]==1 && a[1]!=0){
                    return n10[a[1]];
            }   else {
                    return n20[a[0]] + ' ' + n1[a[1]];} 
        } else if (b==1){
            return n1[a[0]];}
}
