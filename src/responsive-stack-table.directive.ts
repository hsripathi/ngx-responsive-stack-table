import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[NgxResponsiveStackTable],[ResponsiveStackTable],[data-responsive-stacktable]'
})

export class ResponsiveStackTableDirective
{
  private mql: MediaQueryList;
  private mqlListener: (mql: MediaQueryList) => void;

  constructor (private _tableEle: ElementRef, private renderer: Renderer2)
  {
    this._tableEle.nativeElement.classList.add("ngx-responsive-stack-table");
  }

  ngAfterViewInit ()
  {
    this.initResponsiveTable();
  }

  /*This method initializes the responsive table setup for the data table. */
  private initResponsiveTable ()
  {
    // this.renderer.setStyle(this._tableEle.nativeElement, "backgroundColor", "red");
    let curTable = this._tableEle.nativeElement;
    let isIntiated = curTable.getAttribute("isTableIntiated");

    if (isIntiated == null)
    {
      let tableRows = curTable[ "rows" ];

      if (tableRows != null && tableRows.length > 1)
      {
        let tableHeaderCells = tableRows.item(0).cells;

        if (tableHeaderCells != null)
        {
          for (let index = 1; index < tableRows.length; index++)
          {
            var trCell = tableRows[ index ].cells;

            for (let i in trCell)
            {
              if (typeof (trCell[ i ]) == "object")
              {
                trCell[ i ].setAttribute("data-title", tableHeaderCells[ i ].innerHTML);
              }
            }
          }
          this._tableEle.nativeElement.setAttribute("isTableIntiated", true);
        }
      }
    }
  }
}
