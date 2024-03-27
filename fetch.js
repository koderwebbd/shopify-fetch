const response = await fetch(`${Shopify.routes.root}cart/add.js`, {
        body: formData,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
