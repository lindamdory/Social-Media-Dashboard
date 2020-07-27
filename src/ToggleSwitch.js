import React from "react";

class ToggleSwitch extends React.Component {
  
    onToggle = () => {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, len = allElements.length; i < len; i++) {
        var element = allElements[i];
        element.style.background = "white"
        
        
        }
        var allH = document.getElementsByTagName("h2")
        for (var i = 0, len = allH.length; i < len; i++) {
          var helement = allH[i];
          helement.style.color = "black"
          }
         
      } else {
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, len = allElements.length; i < len; i++) {
          var element = allElements[i];
          element.style.background = "rgb(18, 18, 37)"
      }
      var allH = document.getElementsByTagName("h2")
        for (var i = 0, len = allH.length; i < len; i++) {
          var helement = allH[i];
          helement.style.color = "white"
          }
    };

  })

}

  render() {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          onChange={this.onToggle}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
    );
  }
}

export default ToggleSwitch