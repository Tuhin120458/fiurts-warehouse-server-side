import React from 'react';

const UploadProduct = () => {

    const handleUpload = (event) => {
        event.preventDefalut();

        const name = event.target.name.value;
        const price = event.target.price.value;
        console.log(name, price);
    }

    return (
        <div className='container'>
            <h2 className='text-center'> upload product</h2>

            <div className='w-50 mx-auto'>
                <form onSubmit={handleUpload}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Product Name</label>
                        <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Price</label>
                        <input type="text" name='price' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Upload</button>
                </form>
            </div>
        </div>
    );
};

export default UploadProduct;