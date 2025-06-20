export class OutgunnedContextMenu extends ContextMenu
{
  constructor(element, selector, menuItems, options = {})
  {
    super(element, selector, menuItems, options);
  }

  //Stores the pageX / pageY position from the the JQuery event to be applied in `_setPosition`.
  bind()
  {
    this.element.on(this.eventName, this.selector, (event) =>
    {
      event.preventDefault();
       this._position = { left: event.pageX, top: event.pageY };
    });
    super.bind();
  }

  _setPosition(html, target)
  {
    super._setPosition(html, target);
	const pos = foundry.utils.mergeObject(this._position ?? {}, s_DEFAULT_STYLE);
	html.style.position = pos.position;
	Object.assign(html.style, pos);

  }
}

//Defines the default CSS styles for the context menu.
const s_DEFAULT_STYLE = {
   position: 'fixed',
   width: 'fit-content',
   'font-family': '"Signika", sans-serif',
   'font-size': '14px',
   'box-shadow': '0 0 10px #000',
   'text-transform': 'capitalize',
   'text-align': 'left'
};