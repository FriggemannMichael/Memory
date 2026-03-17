import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exit-confirmation',
  standalone: true,
  templateUrl: './exit-confirmation.html',
  styleUrl: './exit-confirmation.scss',
})
export class ExitConfirmation {
  @Input() open = false;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  protected onConfirm(): void {
    this.confirm.emit();
  }

  protected onCancel(): void {
    this.cancel.emit();
  }

  protected onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('popup-backdrop')) {
      this.onCancel();
    }
  }
}
