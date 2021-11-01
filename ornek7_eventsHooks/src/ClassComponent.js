import React, { Component } from 'react';

 class ClassComponent extends Component {
     constructor (props){
         super(props);
         this.state= {
             sayac : Number(this.props.sayi), 
         }
         this.arttir=this.arttir.bind(this);
         
     }
//! - Kendi yazdigimizi class metotlarinda this keyword gecerli olmaz.
//* - Cunku bu metot react’ın kendi metotlari gibi componente otomatik olarak
//*   bagli degildir. Bunun icin contstructor icerisinde baglanmasi (binding)
//*   gerekir
    
    arttir () {
       this.setState({
           sayac:this.state.sayac+1,
       });
    }
// arrow function olarak tanimlarsak, binding yapmamiza gerek kalmaz.
    azalt = () => {
        this.setState({
            sayac:this.state.sayac-1,
        });
    }
    render() {
        let {sayac} =this.state;
       
        return (
            <div>
                <h1>Sayac:{sayac}</h1>
                <button onClick={this.arttir}>Arttir</button>
                <button onClick={this.azalt}>Azalt</button>
            </div>
        )
    }
}
export default ClassComponent;