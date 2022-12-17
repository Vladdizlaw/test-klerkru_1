devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target: "https://www.klerk.ru/yindex.php/v3/event/rubrics"
      }
    }
  }