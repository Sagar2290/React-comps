import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoTrashcan,
  GoX,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div className="flex">
        <div className="mx-5">
          <div>
            <Button primary rounded className="mb-5" onClick={handleClick}>
              <GoBell />
              Click me!!
            </Button>
          </div>
          <div>
            <Button
              primary
              outline
              rounded
              className="mb-5"
              onClick={handleClick}
            >
              <GoBell />
              Click me!!
            </Button>
          </div>
          <div>
            <Button primary className="mb-5" onClick={handleClick}>
              <GoBell />
              Click me!!
            </Button>
          </div>
          <div>
            <Button primary outline className="mb-5" onClick={handleClick}>
              <GoBell />
              Click me!!
            </Button>
          </div>
        </div>

        <div className="mx-5">
          <div>
            <Button className="mb-5" success rounded onMouseEnter={handleClick}>
              <GoCloudDownload />
              Buy Now!
            </Button>
          </div>
          <div>
            <Button
              className="mb-5"
              success
              rounded
              outline
              onMouseEnter={handleClick}
            >
              <GoCloudDownload />
              Buy Now!
            </Button>
          </div>
          <div>
            <Button className="mb-5" success onMouseEnter={handleClick}>
              <GoCloudDownload />
              Buy Now!
            </Button>
          </div>
          <div>
            <Button className="mb-5" success outline onMouseEnter={handleClick}>
              <GoCloudDownload />
              Buy Now!
            </Button>
          </div>
        </div>
        <div className="mx-5">
          <div>
            <Button className="mb-5" warning rounded onMouseLeave={handleClick}>
              <GoDatabase />
              See Deal!
            </Button>
          </div>
          <div>
            <Button
              className="mb-5"
              warning
              rounded
              outline
              onMouseLeave={handleClick}
            >
              <GoDatabase />
              See Deal!
            </Button>
          </div>
          <div>
            <Button className="mb-5" warning onMouseLeave={handleClick}>
              <GoDatabase />
              See Deal!
            </Button>
          </div>
          <div>
            <Button className="mb-5" warning outline onMouseLeave={handleClick}>
              <GoDatabase />
              See Deal!
            </Button>
          </div>
        </div>
        <div className="mx-5">
          <div>
            <Button className="mb-5" secondary rounded>
              Hide Ads!
            </Button>
          </div>
          <div>
            <Button className="mb-5" secondary rounded outline>
              Hide Ads!
            </Button>
          </div>
          <div>
            <Button className="mb-5" secondary>
              Hide Ads!
            </Button>
          </div>
          <div>
            <Button className="mb-5" secondary outline>
              Hide Ads!
            </Button>
          </div>
        </div>
        <div className="mx-5">
          <div>
            <Button className="mb-5" danger rounded>
              <GoTrashcan />
              Delete
            </Button>
          </div>
          <div>
            <Button className="mb-5" danger rounded outline>
              <GoTrashcan />
              Delete
            </Button>
          </div>
          <div>
            <Button className="mb-5" danger>
              <GoTrashcan />
              Delete
            </Button>
          </div>
          <div>
            <Button className="mb-5" danger outline>
              <GoTrashcan />
              Delete
            </Button>
          </div>
        </div>

        <div className="mx-5">
          <div>
            <Button className="mb-5" rounded>
              <GoX /> Cancel
            </Button>
          </div>
          <div>
            <Button className="mb-5" rounded outline>
              <GoX /> Cancel
            </Button>
          </div>
          <div>
            <Button className="mb-5">
              <GoX /> Cancel
            </Button>
          </div>
          <div>
            <Button className="mb-5" outline>
              <GoX /> Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
