class PhoneGenerator {

    constructor(props) {
        props = props || {};
        this.prefix = '' +  (props.prefix || '');
        this.mpx = parseInt( "10000000000000".substring(0,12-this.prefix.length));
        //this.mpx = 10000000000000;
    }

    getValue() {
        return this.prefix + '' +  Math.floor(Math.random()*this.mpx);

        //return this.mpx;
    }
}

module.exports=PhoneGenerator;