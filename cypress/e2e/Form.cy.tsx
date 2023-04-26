/// <reference types="cypress" />

describe("component - Form", () => {
  describe("Standard", () => {
    /**
     * @Test_1
     *
     * @Form_type Standard
     *
     * @Description
     * Test component layout validating all accessibility attributes and
     * associations are correct during form load and state changes where
     * attribute updates are expected.
     *
     * @Covers
     * @form_types
     *   @standard
     *
     * @form_features
     *   @Accessibility
     *     - 1
     *     - 2
     *     - 3
     *     - 4
     *     - 5
     *     - 6
     *     - 7
     *     - 8
     *
     * @form_components
     *   @input
     *   @label
     *   @error
     *   @info
     */
    describe("Test 1", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3001/form");
      });

      /**
       * @attributes
       *
       * Test the existence of attributes and assocations after
       * form loads.
       */
      it("should find accessibility attributes on load", () => {
        cy.get("#standard-form-1").within(() => {
          cy.get('div[id="standard-form-1-first-name-input"]').within(() => {
            /** First Name: <required> **/

            /** Label */
            cy.get('label[for="standard-form-1-first-name"]')
              .contains("First Name")
              .within(() => {
                cy.get("span")
                  .should("have.attr", "aria-hidden", "true")
                  .should("have.attr", "aria-required", "true")
                  .should("have.attr", "aria-label", "required");
              });

            /** Input */
            cy.get('input[id="standard-form-1-first-name"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "text")
              .should("have.attr", "required");

            /** Info */
            cy.get('input[id="standard-form-1-first-name"]')
              .invoke("attr", "aria-describedby")
              .then(($value) => {
                const descId = $value?.split(" ")[0];

                cy.get("div")
                  .contains("InfoFirstName")
                  .should("have.attr", "id")
                  .then(($id) => {
                    expect($id).to.eql(descId);
                  });
              });
          });

          cy.get('div[id="standard-form-1-last-name-input"]').within(() => {
            /** Last Name: <optional> **/

            /** Label */
            cy.get('label[for="standard-form-1-last-name"]')
              .contains("Last Name")
              .within(() => {
                cy.get("span").should(($span) => {
                  expect($span).to.have.length(0);
                });
              });

            /** Input */
            cy.get('input[id="standard-form-1-last-name"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "text")
              .should("not.attr", "required");

            /** Info */
            cy.get('input[id="standard-form-1-last-name"]')
              .invoke("attr", "aria-describedby")
              .then(($value) => {
                const descId = $value?.split(" ")[0];

                cy.get("div")
                  .contains("InfoLastName")
                  .should("have.attr", "id")
                  .then(($id) => {
                    expect($id).to.eql(descId);
                  });
              });
          });

          cy.get('div[id="standard-form-1-email-input"]').within(() => {
            /** Email: <required> **/

            /** Label */
            cy.get('label[for="standard-form-1-email"]')
              .contains("Email")
              .within(() => {
                cy.get("span")
                  .should("have.attr", "aria-hidden", "true")
                  .should("have.attr", "aria-required", "true")
                  .should("have.attr", "aria-label", "required");
              });

            /** Input */
            cy.get('input[id="standard-form-1-email"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "email")
              .should("have.attr", "required");

            /** Info */
            cy.get('input[id="standard-form-1-email"]')
              .invoke("attr", "aria-describedby")
              .then(($value) => {
                const descId = $value?.split(" ")[0];

                cy.get("div")
                  .contains("InfoEmail")
                  .should("have.attr", "id")
                  .then(($id) => {
                    expect($id).to.eql(descId);
                  });
              });
          });

          cy.get('div[id="standard-form-1-password-input"]').within(() => {
            /** Password: <required> **/

            /** Label */
            cy.get('label[for="standard-form-1-password"]')
              .contains("Password")
              .within(() => {
                cy.get("span")
                  .should("have.attr", "aria-hidden", "true")
                  .should("have.attr", "aria-required", "true")
                  .should("have.attr", "aria-label", "required");
              });

            /** Input */
            cy.get('input[id="standard-form-1-password"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "password")
              .should("have.attr", "required");

            /** Info */
            cy.get('input[id="standard-form-1-password"]')
              .invoke("attr", "aria-describedby")
              .then(($value) => {
                const descId = $value?.split(" ")[0];

                cy.get("div")
                  .contains("InfoPassword")
                  .should("have.attr", "id")
                  .then(($id) => {
                    expect($id).to.eql(descId);
                  });
              });
          });
        });
      });

      /**
       * @attributes
       *
       * Test the existence of attributes and assocations after
       * form updates into error state.
       */
      it("should find accessibility attributes on update", () => {
        cy.get("#standard-form-1").within(() => {
          cy.get('button[id="standard-form-1-submit-btn"]').click();

          /** First Name: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="standard-form-1-first-name-input"]').within(() => {
          //   cy.get('input[id="standard-form-1-first-name"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .should("have.attr", "aria-describedby")
          //     .then(($value) => {
          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql($value);
          //         });
          //     });
          // });

          /** Last Name: <optional> **/

          /** No Error */
          // cy.get('div[id="standard-form-1-last-name-input"]').within(() => {
          //   cy.get('input[id="standard-form-1-last-name"]')
          //     .should("have.attr", "aria-invalid", "false")
          //     .should("have.attr", "aria-describedby")
          //     .then(($value) => {
          //       cy.get("div")
          //         .contains("InfoLastName")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql($value);
          //         });
          //     });
          // });

          /** Email: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="standard-form-1-email-input"]').within(() => {
          //   cy.get('input[id="standard-form-1-email"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .should("have.attr", "aria-describedby")
          //     .then(($value) => {
          //       console.log($value);
          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql($value);
          //         });
          //     });
          // });

          /** Password: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="standard-form-1-password-input"]').within(() => {
          //   cy.get('input[id="standard-form-1-password"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .should("have.attr", "aria-describedby")
          //     .then(($value) => {
          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql($value);
          //         });
          //     });
          // });
        });
      });
    });
  });
});
