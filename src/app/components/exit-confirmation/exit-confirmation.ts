import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exit-confirmation',
  standalone: true,
  templateUrl: './exit-confirmation.html',
  styleUrl: './exit-confirmation.scss',
})
export class ExitConfirmation {
  @Input() open = false;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  protected onConfirm(): void {
    this.confirmed.emit();
  }

  protected onCancel(): void {
    this.cancelled.emit();
  }

  protected handleBackdropKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onCancel();
    }
  }

  protected onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('popup-backdrop')) {
      this.onCancel();
    }
  }
}
