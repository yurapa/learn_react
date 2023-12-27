import './App.css';
import BtnClick from "./assessment/button_onclick";
// import StyleInline from "./assessment/style_inline";
import {BtnClick1} from "./assessment/btn_click_first";
import {ReducerComponent} from "./assessment/reducer";
import SelectSubmit from "./assessment/select";
import {FetchDisplayResult} from "./assessment/fetch_display_result";
import { HiderWrapper} from "./assessment/hiderWrapper";
import ContactForm from "./ContactForm";
// import {FetchStatement} from "./assessment/fetch_statement";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactForm />
        <hr/>
        <BtnClick />
        {/*<StyleInline />*/}
        <hr/>
        <BtnClick1 />
        <hr/>
        <ReducerComponent />
        <hr/>
        <SelectSubmit />
        <hr/>
        <FetchDisplayResult />
        <hr/>
        {/*<FetchStatement />*/}
        <hr/>
        <HiderWrapper />
      </header>
    </div>
  );
}

export default App;
