export const stringMixin = {
  data: function () {
    return {
      text: 'Simple Text'
    };
  },
  computed: {
    reversedText(){
      return this.text.split("").reverse().join("");
    },
    countingText(){
      return this.text + ' (' + this.text.length + ')';
    }
  }
};
