import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.getByText(/checkout form/i);

    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i);
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);

    fireEvent.change(firstName, { target: { value: 'David' } });
    fireEvent.change(lastName, { target: { value: 'Gold' } });
    fireEvent.change(address, { target: { value: '25 W 19th St' } });
    fireEvent.change(state, { target: { value: 'NY' } });
    fireEvent.change(zip, { target: { value: '10011' } });

    const checkout = screen.getByRole('button', { name: /checkout/i});
    fireEvent.click(checkout);

});
