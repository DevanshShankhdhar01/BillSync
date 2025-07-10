
    const billForm = document.getElementById("billForm");
    const billList = document.getElementById("billList");

    const bills = [];

    billForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const payer = document.getElementById("payer").value.trim();
      const amount = parseFloat(document.getElementById("amount").value.trim());
      const participants = document.getElementById("participants").value
        .split(",")
        .map(name => name.trim())
        .filter(name => name);

      if (!payer || !amount || participants.length === 0) {
        alert("Please fill all fields correctly.");
        return;
      }

      const splitAmount = (amount / participants.length).toFixed(2);

      const bill = {
        payer,
        amount,
        participants,
        splitAmount
      };

      bills.push(bill);
      renderBills();
      billForm.reset();
    });

    function renderBills() {
      billList.innerHTML = "";
      bills.forEach((bill, index) => {
        const div = document.createElement("div");
        div.className = "bill-item";
        div.innerHTML = `
          <strong>${bill.payer}</strong> paid ₹${bill.amount}<br/>
          Split between: ${bill.participants.join(", ")}<br/>
          Each owes ₹${bill.splitAmount}
        `;
        billList.appendChild(div);
      });
    }
  