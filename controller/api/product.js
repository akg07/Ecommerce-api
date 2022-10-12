const Counter = require('../../model/counter'); // get instance of Counter document
const Product = require('../../model/product'); // get Instance of Product document

/* ******************************************************************************************
create a new product in product document

URL(Post) => http://localhost:8000/api/products/create
****************************************************************************************** */
module.exports.addNewProduct = function(req, res) {

    // Find the single row, couter value and increment it by 1
    // assign this counter value to to product_id
    Counter.findOneAndUpdate(
        {id: "autoval"},
        {"$inc": {"seq": 1}},
        {new:true}, (err, counterDetails) => {
            
            let seqId;

            // if there is no rows then create one row
            if(counterDetails == null) {
                const newCounter = new Counter({id:"autoval", seq: 1});
                newCounter.save();
                seqId = 1;
            }else {
                // assign this counter value to product Id
                seqId = counterDetails.seq;
            }
            
            // create a new product
            const newProd = new Product({
                id: seqId,
                name: req.body.name,
                quantity: req.body.quantity
            });
            
            // add this product to product table
            newProd.save();

            // reutrn status success with product values
            return res.status(200).json({
                product: newProd
            });
        });
    }
    
/* ******************************************************************************************
    Get all products from product document

    URL(Get) => http://localhost:8000/api/products/
****************************************************************************************** */
module.exports.getAllProduct = async function(req, res) {
    try{
        // find all the product from product document
        let products = await Product.find({});

        // return status success with product list
        return res.status(200).json({
            products: products
        });
    }catch(err){

        // handle error and return status Internal server error
        console.log('Error At fetch all products ', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


/* ******************************************************************************************
Delete a single product from document
product id is provided by request
URL(Delete) => http://localhost:8000/api/products/:id
****************************************************************************************** */
module.exports.deleteSingleProduct = async function(req, res) {

    try{
        // find product and delete this product
        await Product.findOneAndDelete({id: req.params.id});
    
        // return status success and a message
        return res.status(200).json({
            message: "product Deleted"
        });
    }catch(err) {
        // handle error and return status Internal server error
        console.log('Error at product delete api ', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


/* ******************************************************************************************
Update quantity of a single product
id and quantity is provided by request
update can be incremental or decremental
    - increment if number in URL is positive
    - decrement if number in URL is negative

URL(Post) => http://localhost:8000/api/products/:id/update_quantity/?number={any number positive ro negative}
****************************************************************************************** */
module.exports.updateSingleProduct = async function(req, res) {

    try{

        // find specific product and increment or decrement it's quantity according to number present in query
        await Product.findOneAndUpdate(
            {id: req.params.id},
            {"$inc": {"quantity": req.query.number}}
        );
        
        // get updated product details
        let prod = await Product.findOne({id: req.params.id}); 

        // return status success with product detatils
        return res.status(200).json({
            product: prod, 
            message: "Updated successfully"
        });
    }catch(err) {

        // handle error and return Internal server error
        console.log('Error at update product ', err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

