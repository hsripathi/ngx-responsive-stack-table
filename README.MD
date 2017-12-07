# ngx-responsive-stack-table

ngx-responsive-stack-table is a directive of Angular this make the HTML tables looks great on every device. 

## Angular Support
Supports Angular > 4

## Installation

To install this library, run:

```bash
$ npm install ngx-responsive-stack-table --save
```

## Usage

First, import the  `NgxResponsiveStackTableModule`  to your module:


```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxResponsiveStackTableModule } from 'ngx-responsive-stack-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxResponsiveStackTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
### Import the stylesheet

Import the `ngx-responsive-stack-table.css`  stylesheet in your project root style.css/style.scss as shown below. 

```bash
@import "../node_modules/ngx-responsive-stack-table/ngx-responsive-stack-table.css";

```

In template file update the table with the `NgxResponsiveStackTable` directive. 


```xml


<table NgxResponsiveStackTable>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
    </tr>
    <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
    </tr>    
</table>
```

## License

MIT 
