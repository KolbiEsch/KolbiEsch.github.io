const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;width:100%;resize:none;");
    tx[i].addEventListener("input", function(e) {
        this.style.height = (this.scrollHeight) + "px";
    });
}

jQuery(function() {
    $("form.ajax").on("submit", function() {
        let that = $(this),
        url = that.attr("action"),
        method = that.attr("method"),
        data = {};
    
        that.find("[name]").each(function(index, value) {
            let that = $(this),
            name = that.attr("name"),
            typeValue = that.val();

            data[name] = typeValue;
        });

        $.ajax({
            url: url,
            type: method,
            data: data,
            beforeSend: function() {
                $("#loader").fadeIn(500);
            },
            success: function(response) {
                console.log(response);
                document.getElementById("ajax").reset();
            },
        }).done(function() {
            $("#loader").fadeOut(500);
            $("#success").fadeIn(500);
            setTimeout(() => $("#success").fadeOut(500), 10000);
        }).fail(function() {
            $("#error").fadeIn(500);
            setTimeout(() => $("#error").fadeOut(500), 10000);
        });

        return false;
    });   
});

const btn = document.querySelector("#btn-header");
const name = document.querySelector(".name");
btn.addEventListener("mouseover", () => {
    name.setAttribute("style", "color:#c200db");
});
btn.addEventListener("mouseout", () => {
    name.setAttribute("style", "color:#e80074")
});
