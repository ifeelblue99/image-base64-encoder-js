<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body{
            padding: .5rem 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            flex-direction: column;
            margin: 0;
            display: flex;
            align-items: center;
            gap: .5rem;
            justify-content: center;
        }
        img{
            border: 2px yellowgreen solid;
            height: 150px;
            width: 250px;
            object-fit: cover;
        }
        textarea{
            padding: .3rem;
            color: rgb(104, 12, 43);
            border: 2px yellowgreen solid;
            background-color: rgb(236, 236, 236);
        }
    </style>
    <script src="base64.js" defer></script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base64</title>
</head>
<body>
    <img id="img-holder" src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg" alt="select image" >
    <input  accept="image/*" type="file" id="file-input">
    <textarea name="url-txt" id="url-txt-area" cols="30" rows="18"></textarea>
</body>
</html>
