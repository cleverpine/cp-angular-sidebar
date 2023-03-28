# Sidebar component
To use the Sidebar Component in your Angular application, follow these steps:

## Install the Sidebar Component library using your preferred package manager (e.g. npm, yarn).
`npm install @lht/sidebar --save`

## Import the Sidebar Component module into your Angular application's module:

```typescript
import { SidebarModule } from '@lht/sidebar';

@NgModule({
  imports: [SidebarModule],
  // ...
})
export class AppModule {}
```
## Add the Sidebar Component to your Angular component
```html
<lht-sidebar
  [expanded]="expanded"
  (overlayClick)="onOverlayClick()"
>
  <!-- Your sidebar content here -->
</lht-sidebar>
```
In this example, the expanded property is set to true to show the sidebar, and the (overlayClick) event is bound to the onOverlayClick() method in the component.

Handle the overlayClick event in your component's code:
```typescript
@Component({
  // ...
})
export class MyComponent {

  expanded = true;
  onOverlayClick() {
    this.expanded = false;
    // Handle the overlay click event here
  }
}
```
The `onOverlayClick()` method will be called whenever the user clicks on the overlay element, allowing you to implement custom behavior (e.g. hiding the sidebar).

That's it! You should now have a functional sidebar in your Angular application.