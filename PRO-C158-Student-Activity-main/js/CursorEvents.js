AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    //console.log(id)
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    //const placesId = thumb;
    //console.log(placesId)
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      //console.log(placeContainer)
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      //entityEl.setAttribute("text", {
      //  font: "exo2bold",
      //  align: "center",
      //  width: 70,
      //  color: "#fcba03",
      //  value: item.title,
      //});
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      console.log(selectedItemId)
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
          });
        }
      }
    });
  },
});