/// <reference types="cypress" />

describe("component - Form", () => {
  describe("Control", () => {
    /**
     * @Test_1
     *
     * @Form_type Control
     *
     * @Description
     * Test component layout validating all accessibility attributes and
     * associations are correct during form load and state changes where
     * attribute updates are expected.
     *
     * @Covers
     * @form_types
     *   @control
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
        cy.get("#control-form-1").within(() => {
          cy.get('div[id="control-form-1-first-name-input"]').within(() => {
            /** First Name: <required> **/

            /** Label */
            cy.get('label[for="control-form-1-first-name"]')
              .contains("First Name")
              .within(() => {
                cy.get("span")
                  .should("have.attr", "aria-hidden", "true")
                  .should("have.attr", "aria-required", "true")
                  .should("have.attr", "aria-label", "required");
              });

            /** Input */
            cy.get('input[id="control-form-1-first-name"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "text")
              .should("have.attr", "required");

            /** Info */
            cy.get('input[id="control-form-1-first-name"]')
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

          cy.get('div[id="control-form-1-last-name-input"]').within(() => {
            /** Last Name: <optional> **/

            /** Label */
            cy.get('label[for="control-form-1-last-name"]')
              .contains("Last Name")
              .within(() => {
                cy.get("span").should(($span) => {
                  expect($span).to.have.length(0);
                });
              });

            /** Input */
            cy.get('input[id="control-form-1-last-name"]')
              .should("have.attr", "aria-invalid", "false")
              .should("have.attr", "type", "text")
              .should("not.attr", "required");

            /** Info */
            cy.get('input[id="control-form-1-last-name"]')
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

          // cy.get('div[id="control-form-1-email-input"]').within(() => {
          //   /** Email: <required> **/

          //   /** Label */
          //   cy.get('label[for="control-form-1-email"]')
          //     .contains("Email")
          //     .within(() => {
          //       cy.get("span")
          //         .should("have.attr", "aria-hidden", "true")
          //         .should("have.attr", "aria-required", "true")
          //         .should("have.attr", "aria-label", "required");
          //     });

          //   /** Input */
          //   cy.get('input[id="control-form-1-email"]')
          //     .should("have.attr", "aria-invalid", "false")
          //     .should("have.attr", "type", "email")
          //     .should("have.attr", "required");

          //   /** Info */
          //   cy.get('input[id="control-form-1-email"]')
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       const descId = $value?.split(" ")[0];

          //       cy.get("div")
          //         .contains("InfoEmail")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });

          // cy.get('div[id="control-form-1-password-input"]').within(() => {
          //   /** Password: <required> **/

          //   /** Label */
          //   cy.get('label[for="control-form-1-password"]')
          //     .contains("Password")
          //     .within(() => {
          //       cy.get("span")
          //         .should("have.attr", "aria-hidden", "true")
          //         .should("have.attr", "aria-required", "true")
          //         .should("have.attr", "aria-label", "required");
          //     });

          //   /** Input */
          //   cy.get('input[id="control-form-1-password"]')
          //     .should("have.attr", "aria-invalid", "false")
          //     .should("have.attr", "type", "password")
          //     .should("have.attr", "required");

          //   /** Info */
          //   cy.get('input[id="control-form-1-password"]')
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       const descId = $value?.split(" ")[0];

          //       cy.get("div")
          //         .contains("InfoPassword")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });
        });
      });

      /**
       * @attributes
       *
       * Test the existence of attributes and assocations after
       * form updates into error state.
       */
      it("should find accessibility attributes on update", () => {
        cy.get("#control-form-1").within(() => {
          cy.get('button[id="control-form-1-submit-btn"]').click();

          /** First Name: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="control-form-1-first-name-input"]').within(() => {
          //   cy.get('input[id="control-form-1-first-name"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       const descId = $value?.split(" ")[1];

          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });

          /** Last Name: <optional> **/

          /** No Error */
          // cy.get('div[id="control-form-1-last-name-input"]').within(() => {
          //   cy.get('input[id="control-form-1-last-name"]')
          //     .should("have.attr", "aria-invalid", "false")
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       cy.get("div")
          //         .contains("InfoLastName")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           const descId = $value?.split(" ")[0];

          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });

          /** Email: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="control-form-1-email-input"]').within(() => {
          //   cy.get('input[id="control-form-1-email"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       console.log($value);
          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           const descId = $value?.split(" ")[1];

          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });

          /** Password: <required> **/

          /** Input & Error Associaton */
          // cy.get('div[id="control-form-1-password-input"]').within(() => {
          //   cy.get('input[id="control-form-1-password"]')
          //     .should("have.attr", "aria-invalid", "true")
          //     .invoke("attr", "aria-describedby")
          //     .then(($value) => {
          //       cy.get("div")
          //         .contains("Require")
          //         .should("have.attr", "role", "alert")
          //         .should("have.attr", "id")
          //         .then(($id) => {
          //           const descId = $value?.split(" ")[1];

          //           expect($id).to.eql(descId);
          //         });
          //     });
          // });
        });
      });
    });

    /**
     * @Test_2
     *
     * @Form_type Control
     *
     * @Description
     * Test components functionality validating the expected behavior with no
     * validation. The form can be submitted regardless of any input conditions.
     *
     * @Covers
     * @form_types
     *   @control
     *
     * @form_features
     *   @none
     *
     * @form_components
     *   @input
     *
     */
    describe("Test 2", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3001/form");
      });

      /**
       * @functionality
       *
       * This test should submt the form with no validation.
       *
       */
      // it("should successfully submit non-validated form ", () => {
      //   cy.get("#control-form-2").within(() => {
      //     /** Submit empty form **/
      //     cy.get('button[id="control-form-2-submit-btn"]').click();

      //     /** Fields should be empty **/
      //     cy.get('input[id="control-form-2-first-name"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-last-name"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-email"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-password"]').should("have.value", "");

      //     /** Fill partial fields **/
      //     cy.get('input[id="control-form-2-first-name"]').type("john");
      //     cy.get('input[id="control-form-2-last-name"]').type("doe");
      //     cy.get('input[id="control-form-2-email"]').type("john@foo.com");

      //     /** Submit partial form **/
      //     cy.get('button[id="control-form-2-submit-btn"]').click();

      //     /** Successful submit will clear fields **/
      //     cy.get('input[id="control-form-2-first-name"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-last-name"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-email"]').should("have.value", "");
      //     cy.get('input[id="control-form-2-password"]').should("have.value", "");
      //   });
      // });
    });

    /**
     * @Test_3
     *
     * @Form_type Control
     *
     * @Description
     * Test components functionality validating the expected behavior with
     * validation enabled and tracked during any change event. The associated
     * components for errors and info must work as expected while validation
     * triggers state changes.
     *
     * @Covers
     * @form_types
     *   @control
     *
     * @form_features
     *   @validate_on_event_change
     *
     * @form_components
     *   @input
     */
    // describe("Test 3", () => {
    //   beforeEach(() => {
    //     cy.visit("http://localhost:3001/form");
    //   });

    //   /**
    //    * @functionality
    //    *
    //    * This test should submt the form with no validation.
    //    *
    //    */
    //   it("should successfully submit validated form (on change)", () => {
    //     cy.get("#control-form-3").within(() => {
    //       /**
    //        * Add value, remove and blur to set the error.
    //        */
    //       cy.get('input[id="control-form-3-first-name"]').type("john");
    //       cy.get('input[id="control-form-3-first-name"]').clear().blur();

    //       cy.get("#control-form-3-first-name-input")
    //         .contains("Required Standard 3")
    //         .should(($p) => {
    //           expect($p).to.have.length(1);
    //         });

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-3-submit-btn"]').click();

    //       /**
    //        * All fields should have errors.
    //        */
    //       cy.get(".control-form-3-error").should(($p) => {
    //         expect($p).to.have.length(4);
    //       });

    //       /** Fill partial fields **/
    //       cy.get('input[id="control-form-3-first-name"]').type("john");
    //       cy.get('input[id="control-form-3-last-name"]').type("doe");
    //       cy.get('input[id="control-form-3-email"]').type("john@foo.com");
    //       cy.get('input[id="control-form-3-password"]').type("1919");

    //       /** Submit valid form **/
    //       cy.get('button[id="control-form-3-submit-btn"]').click();

    //       /** Fields should be empty **/
    //       cy.get('input[id="control-form-3-first-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-3-last-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-3-email"]').should("have.value", "");
    //       cy.get('input[id="control-form-3-password"]').should("have.value", "");
    //     });
    //   });
    // });

    /**
     * @Test_4
     *
     * @Form_type Control
     *
     * @Description
     * Test components functionality validating the expected behavior with
     * validation enabled and tracked during form submission. The associated
     * components for errors and info must work as expected while validation
     * triggers state changes.
     *
     * @Covers
     * @form_types
     *   @control
     *
     * @form_features
     *   @validate_on_submit
     *
     * @form_components
     *   @input
     */
    // describe("Test 4", () => {
    //   beforeEach(() => {
    //     cy.visit("http://localhost:3001/form");
    //   });

    //   /**
    //    * @functionality
    //    *
    //    * This test should submt the form with no validation.
    //    *
    //    */
    //   it("should successfully submit validated form (on submit)", () => {
    //     cy.get("#control-form-4").within(() => {
    //       /**
    //        * Add value, remove and blur to set the error.
    //        */
    //       cy.get('input[id="control-form-4-first-name"]').type("john");
    //       cy.get('input[id="control-form-4-first-name"]').clear().blur();

    //       /**
    //        * Should not have any errors.
    //        */
    //       cy.get("#control-form-4-first-name-input")
    //         .contains("Required 4")
    //         .should(($p) => {
    //           expect($p).to.have.length(0);
    //         });

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-4-submit-btn"]').click();

    //       /**
    //        * All fields should have errors.
    //        */
    //       cy.get(".control-form-4-error").should(($p) => {
    //         expect($p).to.have.length(4);
    //       });

    //       /** Fill partial fields **/
    //       cy.get('input[id="control-form-4-first-name"]').type("john");
    //       cy.get('input[id="control-form-4-last-name"]').type("doe");
    //       cy.get('input[id="control-form-4-email"]').type("john@foo.com");
    //       cy.get('input[id="control-form-4-password"]').type("1919");

    //       /** Submit valid form **/
    //       cy.get('button[id="control-form-4-submit-btn"]').click();

    //       /** Fields should be empty **/
    //       cy.get('input[id="control-form-4-first-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-4-last-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-4-email"]').should("have.value", "");
    //       cy.get('input[id="control-form-4-password"]').should("have.value", "");
    //     });
    //   });
    // });

    /**
     * @Test_5
     *
     * @Form_type Control
     *
     * @Description
     * Test components functionality validating the expected behavior with
     * validation and auto focus enabled, and tracked during any change event.
     * The associated components for errors and info must work as expected while
     * validation triggers state changes.
     *
     * @Covers
     * @form_types
     *   @control
     *
     * @form_features
     *   @validate_on_event_change
     *   @auto_focus
     *
     * @form_components
     *   @input
     */
    // describe("Test 5", () => {
    //   beforeEach(() => {
    //     cy.visit("http://localhost:3001/form");
    //   });

    //   /**
    //    * @functionality
    //    *
    //    * This test should submt the form with validation while managing focus with
    //    * auto focus during invalid submission attempts.
    //    *
    //    */
    //   it("should successfully submit validated form after auto focus (on change) ", () => {
    //     cy.get("#control-form-5").within(() => {
    //       /**
    //        * Add value, remove and blur to set the error.
    //        */
    //       cy.get('input[id="control-form-5-first-name"]').type("john");
    //       cy.get('input[id="control-form-5-first-name"]').clear().blur();

    //       cy.get("#control-form-5-first-name-input")
    //         .contains("Required Standard 5")
    //         .should(($p) => {
    //           expect($p).to.have.length(1);
    //         });

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-5-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-5-first-name");
    //       });
    //       cy.get('input[id="control-form-5-first-name"]').type("john");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-5-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-5-last-name");
    //       });
    //       cy.get('input[id="control-form-5-last-name"]').type("doe");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-5-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-5-email");
    //       });
    //       cy.get('input[id="control-form-5-email"]').type("john@foo.com");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-5-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-5-password");
    //       });
    //       cy.get('input[id="control-form-5-password"]').type("1919");

    //       /**
    //        * No errors are found.
    //        */
    //       cy.get(".control-form-5-error").should(($p) => {
    //         expect($p).to.have.length(0);
    //       });

    //       /** Submit valid form **/
    //       cy.get('button[id="control-form-5-submit-btn"]').click();

    //       /** Fields should be empty **/
    //       cy.get('input[id="control-form-5-first-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-5-last-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-5-email"]').should("have.value", "");
    //       cy.get('input[id="control-form-5-password"]').should("have.value", "");
    //     });
    //   });
    // });

    /**
     * @Test_6
     *
     * @Form_type Control
     *
     * @Description
     * Test components functionality validating the expected behavior with
     * validation and auto focus enabled, and tracked during form submission.
     * The associated components for errors and info must work as expected
     * while validation triggers state changes.
     *
     * @Covers
     * @form_types
     *   @control
     *
     * @form_features
     *   @validate_on_submit
     *   @auto_focus
     *
     * @form_components
     *   @input
     */
    // describe("Test 6", () => {
    //   beforeEach(() => {
    //     cy.visit("http://localhost:3001/form");
    //   });

    //   /**
    //    * @functionality
    //    *
    //    * This test should submt the form with validation while managing focus with
    //    * auto focus during invalid submission attempts.
    //    *
    //    */
    //   it("should successfully submit validated form after auto focus (on change) ", () => {
    //     cy.get("#control-form-6").within(() => {
    //       /**
    //        * Add value, remove and blur to set the error.
    //        */
    //       cy.get('input[id="control-form-6-first-name"]').type("john");
    //       cy.get('input[id="control-form-6-first-name"]').clear().blur();

    //       cy.get("#control-form-6-first-name-input")
    //         .contains("Required 6")
    //         .should(($p) => {
    //           expect($p).to.have.length(0);
    //         });

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-6-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-6-first-name");
    //       });
    //       cy.get('input[id="control-form-6-first-name"]').type("john");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-6-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-6-last-name");
    //       });
    //       cy.get('input[id="control-form-6-last-name"]').type("doe");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-6-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-6-email");
    //       });
    //       cy.get('input[id="control-form-6-email"]').type("john@foo.com");

    //       /** Submit partial form **/
    //       cy.get('button[id="control-form-6-submit-btn"]').click();
    //       cy.focused().then(($el) => {
    //         expect($el).to.have.id("control-form-6-password");
    //       });
    //       cy.get('input[id="control-form-6-password"]').type("1919");

    //       /**
    //        * No errors are found.
    //        */
    //       cy.get(".control-form-6-error").should(($p) => {
    //         expect($p).to.have.length(0);
    //       });

    //       /** Submit valid form **/
    //       cy.get('button[id="control-form-6-submit-btn"]').click();

    //       /** Fields should be empty **/
    //       cy.get('input[id="control-form-6-first-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-6-last-name"]').should("have.value", "");
    //       cy.get('input[id="control-form-6-email"]').should("have.value", "");
    //       cy.get('input[id="control-form-6-password"]').should("have.value", "");
    //     });
    //   });
    // });
  });
});
