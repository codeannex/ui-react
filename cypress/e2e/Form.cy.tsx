/// <reference types="cypress" />

describe("component - Form", () => {
  /**
   * Basic setup with required props.
   */
  describe("basic setup", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001/form");
    });

    it("renders errors on submit", () => {
      cy.get("#basic").within(() => {
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(7);
        });

        cy.get("#first-name-basic").type("John");
        cy.get("#last-name-basic").type("Dow");
        cy.get("#email-basic").type("john@gmail.com");
        cy.get("#password-basic").type("191919");
        cy.get("#class-basic").select("interactive");
        cy.get("#class-type-basic").within(() => {
          cy.get("input")
            .should(($p) => {
              expect($p).to.have.length(3);
            })
            .check("kick-boxing");
        });

        cy.get("#comment-basic").type("Thank you!");

        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });
      });
    });

    it("renders error on blur", () => {
      cy.get("#basic").within(() => {
        cy.get("#first-name-basic").focus().blur();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(1);
        });

        cy.get("#first-name-basic").type("John");

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });
      });
    });
  });

  /**
   * Enhanced setup with autoFocus enabled.
   */
  describe("auto focus setup", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001/form");
    });

    it("renders errors on submit and sets auto focus", () => {
      cy.get("#auto-focus").within(() => {
        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(7);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("first-name-auto");
        });

        cy.get("#first-name-auto").type("John");

        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(6);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("last-name-auto");
        });

        cy.get("#last-name-auto").type("Doe");

        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(5);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("email-auto");
        });

        cy.get("#email-auto").type("john@gmail.com");

        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(4);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("password-auto");
        });

        cy.get("#password-auto").type("1919");

        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(3);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("class-auto");
        });

        cy.get("#class-auto").select("interactive");

        // auto fill click cycle
        // focus is not setup for radio buttons.
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(2);
        });

        cy.get("#class-type-auto").within(() => {
          cy.get("input")
            .should(($p) => {
              expect($p).to.have.length(3);
            })
            .check("kick-boxing");
        });

        // auto fill click cycle
        cy.get("button").click();

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(1);
        });

        cy.focused().then(($el) => {
          expect($el).to.have.id("comment-auto");
        });

        cy.get("#comment-auto").type("1919");
        cy.get("#comment-auto").type("Thank you!");

        // submit
        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        cy.get("button").click();

        cy.get("#first-name-auto").should("have.value", "");
        cy.get("#last-name-auto").should("have.value", "");
        cy.get("#email-auto").should("have.value", "");
        cy.get("#password-auto").should("have.value", "");
        cy.get("#class-auto").should("have.value", "");
        cy.get("#class-type-auto").within(() => {
          cy.get("input")
            .should(($p) => {
              expect($p).to.have.length(3);
            })
            .should("not.be.checked");
        });
      });
    });
  });

  /**
   * Enhanced setup with validateOnSubmitOnly enabled.
   */
  describe("validiate on submit only", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3001/form");
    });

    it(" should not render errors on any input type on blur", () => {
      cy.get("#validate-submit").within(() => {
        /** should not render error on text input type */
        cy.get("#first-name-validate-submit").focus().blur();

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        /** should not render error on email input type */
        cy.get("#email-validate-submit").focus().blur();

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        // /** should not render error on email input type */
        cy.get("#password-validate-submit").focus().blur();

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        /** should not render error on select input type */
        cy.get("#class-validate-submit").focus().blur();

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        /** should not render error on radio input type */
        cy.get("#class-type-validate-submit")
          .find("input")
          .each(($input, index) => {
            if (index === 2) {
              cy.wrap($input).focus().blur();
            }
          });

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });

        /** should not render error on text area input type */
        cy.get("#comment-validate-submit").focus().blur();

        cy.wait(50);

        cy.get('span:contains("Required")').should(($p) => {
          expect($p).to.have.length(0);
        });
      });
    });
  });
});
