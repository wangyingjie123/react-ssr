import { connect } from "react-redux"
import Foo from "@/views/foo/Foo";

const mapStateToProps = (state) => ({
  FooList: state.fooList
});

export default connect(mapStateToProps)(Foo);