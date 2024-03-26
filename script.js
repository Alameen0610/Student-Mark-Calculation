const Total = document.getElementById("total");
const show_mark = document.getElementById("show_total");

function calculateTotal() {
    const tamil = document.getElementById("Tamil").value;
    const english = document.getElementById("English").value;
    const maths = document.getElementById("Maths").value;
    const science = document.getElementById("Science").value;
    const social = document.getElementById("Social").value;

    let tamil_mark = parseFloat(tamil);
    let english_mark = parseFloat(english);
    let maths_mark = parseFloat(maths);
    let science_mark = parseFloat(science);
    let social_mark = parseFloat(social);

    let total_val = tamil_mark + english_mark + maths_mark + science_mark + social_mark;

    show_mark.textContent = total_val;
}

Total.addEventListener("click", calculateTotal);
