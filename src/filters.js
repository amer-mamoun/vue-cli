import Vue from "vue";

// make uppercase
//Vue.filter("uppercase", function(v) {
//   return v.toUpperCase();
//});

// make reverse
Vue.filter("reverser", function(v) {
    return v
        .split("")
        .reverse()
        .join("");
});

//  Shoten Text
Vue.filter("shorten", function(value, textLength, suffix) {
    return value.substring(0, textLength) + suffix;
});
