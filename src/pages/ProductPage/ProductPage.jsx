import { useLoaderData } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";

import Rating from "../../components/UI/Rating/Rating";
import RadioGroup from "../../components/UI/RadioGroup/RadioGroup";
import Input from "../../components/UI/Input/Input";
import ButtonCta from "../../components/UI/Buttons/ButtonCta";
import { Tab, TabList, TabPanel, Tabs } from "../../components/UI/Tabs/Tabs";
import CardGrid from "../../components/UI/Card/CardGird";
import Card from "../../components/UI/Card/Card";
import Button from "../../components/UI/Buttons/Button";
import { currencyFormatter } from "../../util/currencyFormat";
import Carousel from "../../components/UI/Carousel/Carousel";
import classes from "./Product.module.css";
import Accordion from "../../components/UI/Accordion/Accordion";
const images = [
  "https://avatars.mds.yandex.net/get-mpic/11532558/img_id5932800990203531328.png/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11408361/img_id5207916897522742635.png/600x800",
  "https://avatars.mds.yandex.net/get-mpic/12087486/img_id3282495246920086520.jpeg/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11395611/img_id2961752134081467693.jpeg/600x800",
];
const DUMMY_PRODUCTS = [
  {
    id: "product1",
    title: "Syltherine",
    label: "-30%",
    image: "chair.png",
    descriptions: "Stylish cafe chair ",
    price: 2500,
    oldPrice: 3500,
  },
  {
    id: "product2",
    title: "Leviosa",
    image: "product2.png",
    descriptions: "Stylish cafe chair ",
    price: 2500,
  },
  {
    id: "product3",
    title: "Lolito",
    label: "-50%",
    image: "chair.png",
    descriptions: "Luxury big sofa",
    price: 7000,
    oldPrice: 14000,
  },
  {
    id: "product4",
    title: "Respira",
    label: "New",
    image: "product2.png",
    descriptions: "Outdoor bar table and stool",
    price: 10000,
  },
];
const ProductPage = () => {
  const data = useLoaderData();

  const handleChangeColor = () => {};
  return (
    <>
      <BreadCrumbs tiny />
      <div className={classes.container}>
        <section className={classes["product-main"]}>
          <div className={classes.gallery}>
            <Carousel pagination={false}>
              <Carousel.Thumbs>
                {images.map((image, index) => {
                  return (
                    <Carousel.Thumbs.Slide key={`thumbs-${index}`} index={index}>
                      <img src={image} alt={`image-${index}`} />
                    </Carousel.Thumbs.Slide>
                  );
                })}
              </Carousel.Thumbs>
              <Carousel.Content>
                {" "}
                {images.map((image, index) => {
                  return (
                    <Carousel.Item key={`slide-${index}`} index={index}>
                      <img src={image} alt={`image-${index}`} />
                    </Carousel.Item>
                  );
                })}
              </Carousel.Content>
            </Carousel>
          </div>

          <div className={classes["product-info"]}>
            <h1 className={classes["product-title"]}>{data.title}</h1>
            <p className={classes["product-price"]}>{currencyFormatter(1000)}</p>
            <div className={classes.row}>
              <div className={classes["rating-container"]}>
                <Rating value={4.2} readOnly />
              </div>
              <p className={classes["reviews-count"]}>5 Customer Review</p>
            </div>

            <p className={classes["product-short-description"]}>
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio
              which boasts a clear midrange and extended highs for a sound.
            </p>
            <div className={classes["product-sizes"]}>
              <RadioGroup name="Sizes" variant="buttons" horizontal items={["s", "m", "l"]} />
            </div>
            <div className={classes["product-colors"]}>
              <RadioGroup name="Colors" variant="colors" horizontal items={["#816DFA", "#000", "#B88E2F"]} handleChange={handleChangeColor} />
            </div>
            <div className={classes["button-group"]}>
              <Input type="number" min={1} max={10} readOnly defaultValue={1} />
              <div className={classes.cta}>
                <ButtonCta>Add to Cart</ButtonCta>
                <ButtonCta>+ Compare</ButtonCta>
              </div>
            </div>
            <dl>
              <dt>Sku</dt>
              <dd>:&nbsp; &nbsp;A large feline inhabiting Bodmin Moor.</dd>

              <dt>Category</dt>
              <dd>:&nbsp; &nbsp;A sea serpent.</dd>

              <dt>Tags</dt>
              <dd>:&nbsp; &nbsp;giant owl-like creature.</dd>

              <dt>Share</dt>
              <dd>
                :&nbsp; &nbsp; <FaFacebook /> <RiTwitterXLine /> <AiFillInstagram />
              </dd>
            </dl>
          </div>
        </section>
        <section className={classes["product-description"]}>
          <div className={classes.tabsWrapper}>
            <Tabs defaultValue="0">
              <TabList>
                <Tab value="0">Description</Tab>
                <Tab value="1">Adition inforemation</Tab>
                <Tab value="2">Reviews</Tab>
              </TabList>
              <TabPanel value="0">
                <div>
                  <p>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                    sound of Marshall, unplugs the chords, and takes the show on the road.
                  </p>
                  <p>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                    sound of Marshall, unplugs the chords, and takes the show on the road.
                  </p>
                  <div className={classes["description-img-container"]}>
                    <div>
                      <img src={images[0]} alt={data.title} />
                    </div>
                    <div>
                      <img src={images[1]} alt={data.title} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="1">Adition information</TabPanel>
              <TabPanel value="2">Reviews</TabPanel>
            </Tabs>
          </div>
          <div className={classes.accordionWrapper}>
            <Accordion>
              <Accordion.Item id="0">
                <Accordion.Item.Title>Description</Accordion.Item.Title>
                <Accordion.Item.Panel>
                  <div>
                    <p>
                      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                      sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p>
                      Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and
                      sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <div className={classes["description-img-container"]}>
                      <div>
                        <img src={images[0]} alt={data.title} />
                      </div>
                      <div>
                        <img src={images[1]} alt={data.title} />
                      </div>
                    </div>
                  </div>
                </Accordion.Item.Panel>
              </Accordion.Item>
              <Accordion.Item id="1">
                <Accordion.Item.Title>Adition information</Accordion.Item.Title>
                <Accordion.Item.Panel>Adition information</Accordion.Item.Panel>
              </Accordion.Item>
              <Accordion.Item id="2">
                <Accordion.Item.Title>Reviews</Accordion.Item.Title>
                <Accordion.Item.Panel>Reviews</Accordion.Item.Panel>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        <section className={classes["related-products"]}>
          <h2>Related Products</h2>
          <CardGrid>
            {DUMMY_PRODUCTS.map((product) => {
              return (
                <li key={product.id}>
                  <Card item={product} />
                </li>
              );
            })}
          </CardGrid>
          <Button variant="outline">Show More</Button>
        </section>
      </div>
    </>
  );
};

export function loader({ params }) {
  const data = { title: "thing", params: params };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
}

export default ProductPage;
