import { useEffect } from "react";
import { useState } from "react"

const CollectionPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                {
                    _id: 1,
                    name: "Product 1",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random9"}]
                },
                {
                    _id: 2,
                    name: "Product 2",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random4"}]
                },
                {
                    _id: 3,
                    name: "Product 3",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random3"}]
                },
                {
                    _id: 4,
                    name: "Product 4",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random4"}]
                },
                {
                    _id: 5,
                    name: "Product 1",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random5"}]
                },
                {
                    _id: 6,
                    name: "Product 2",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random6"}]
                },
                {
                    _id: 7,
                    name: "Product 3",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random7"}]
                },
                {
                    _id: 8,
                    name: "Product 4",
                    price: 100,
                    images: [{url: "http://picsum.photos/500/500?random8"}]
                }
            ]; 
            setProducts(fetchedProducts);
        }, 1000)
    }, [])
  return (
    <div className="flex flex-col "></div>
  )
}

export default CollectionPage