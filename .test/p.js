var
  tape= require("tape"),
  react= require("react"),
  reactDotDom= require("..")

tape("Paragraph is the same", function(t){
	t.ok(reactDotDom, "React-dot-dom exports something")
	t.ok(reactDotDom.p, "React-dot-dom has a p tag")
	t.equal(react.DOM.p, reactDotDom.p, "React-dot-dom's p tag is React.DOM.p")
	t.end()
})
