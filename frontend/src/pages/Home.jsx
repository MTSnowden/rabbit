import Hero from '../components/Layout/Hero'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'

const placeholderProducts = [
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
]

const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollectionSection />
        <NewArrivals />

        {/* best sellers */}
        <h2 className="text-3xl text-center font-bold mb-4">
            Best Seller
        </h2>
        <ProductDetails />

        <div className="container mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4">
                Top Wears for Women
            </h2>
            <ProductGrid products={placeholderProducts} />
        </div>

        <FeaturedCollection />
    </div>
   
  )
}

export default Home