import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { BalFormBundle } from '@baloise/design-system-components-angular/standalone'

@Component({
  selector: 'app-checkout-form-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BalFormBundle],
  template: `
    <ng-container [formGroup]="addressFormGroup">
      <bal-form-grid>
        <!--  -->
        <bal-form-col size="two-thirds">
          <bal-field appInvalidField="street">
            <bal-field-label>Street</bal-field-label>
            <bal-field-control>
              <bal-input formControlName="street"></bal-input>
            </bal-field-control>
            <bal-field-message>
              <bal-ng-error [controlName]="'street'" error="required">
                Field is required
              </bal-ng-error>
            </bal-field-message>
          </bal-field>
        </bal-form-col>
        <!--  -->
        <bal-form-col size="one-third">
          <bal-field appInvalidField="streetNumber">
            <bal-field-label>Street Nr</bal-field-label>
            <bal-field-control>
              <bal-input formControlName="streetNumber"></bal-input>
            </bal-field-control>
            <bal-field-message>
              <bal-ng-error [controlName]="'streetNumber'" error="required">
                Field is required
              </bal-ng-error>
            </bal-field-message>
          </bal-field>
        </bal-form-col>
        <!--  -->
        <bal-form-col size="one-third">
          <bal-field appInvalidField="postalCode">
            <bal-field-label>Postal Code</bal-field-label>
            <bal-field-control>
              <bal-input formControlName="postalCode" maxLength="4"></bal-input>
            </bal-field-control>
            <bal-field-message>
              <bal-ng-error [controlName]="'postalCode'" error="required">
                Field is required
              </bal-ng-error>
              <bal-ng-error [controlName]="'postalCode'" error="minlength">
                Postal code length is 4
              </bal-ng-error>
            </bal-field-message>
          </bal-field>
        </bal-form-col>
        <!--  -->
        <bal-form-col size="two-thirds">
          <bal-field appInvalidField="city">
            <bal-field-label>City</bal-field-label>
            <bal-field-control>
              <bal-input formControlName="city"></bal-input>
            </bal-field-control>
            <bal-field-message>
              <bal-ng-error [controlName]="'city'" error="required">
                Field is required
              </bal-ng-error>
            </bal-field-message>
          </bal-field>
        </bal-form-col>
        <!--  -->
      </bal-form-grid>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutFormAddressComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('formGroup') addressFormGroup!: FormGroup
}
