import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the side nav when the toggleSideNav method is called', () => {
    const initialShowingSideNav = component.isShowingSideNav;
    component.toggleSideNav();
    expect(component.isShowingSideNav).toBe(!initialShowingSideNav);
  });

  it('should emit the value of isShowingSideNav when the toggleSideNav method is called', () => {
    spyOn(component.expandSideNav, 'emit');
    component.toggleSideNav();
    expect(component.expandSideNav.emit).toHaveBeenCalledWith(component.isShowingSideNav);
  });

  it('should hide the side nav when the onHideSideNav method is called', () => {
    component.onHideSideNav();
    expect(component.isShowingSideNav).toBe(false);
  });

  it('should emit the hideSideNav event when the onHideSideNav method is called', () => {
    spyOn(component.hideSideNav, 'emit');
    component.onHideSideNav();
    expect(component.hideSideNav.emit).toHaveBeenCalled();
  });

  it('should have an initial value of isShowingSideNav set to false', () => {
    expect(component.isShowingSideNav).toBe(false);
  });

  it('should have an expanded sidebar when isShowingSideNav is true', () => {
    component.isShowingSideNav = true;
    fixture.detectChanges();
    const sidenavElement = fixture.nativeElement.querySelector('.sidebar');
    expect(sidenavElement).toBeTruthy();
  });

  it('should have a collapsed sidebar when isShowingSideNav is false', () => {
    component.isShowingSideNav = false;
    fixture.detectChanges();
    const sidenavElement = fixture.nativeElement.querySelector('.sidebar-small');
    expect(sidenavElement).toBeTruthy();
  });

  it('should emit the value of isShowingSideNav when the onHideSideNav method is called', () => {
    spyOn(component.hideSideNav, 'emit');
    component.onHideSideNav();
    expect(component.hideSideNav.emit).toHaveBeenCalledWith();
  });

  it('should hide the side nav when the content-overlay is clicked', () => {
    spyOn(component, 'onHideSideNav');
    component.isShowingSideNav = true;
    fixture.detectChanges();
    const contentOverlay = fixture.nativeElement.querySelector('.content-overlay');
    contentOverlay.click();
    expect(component.onHideSideNav).toHaveBeenCalled();
  });
});
