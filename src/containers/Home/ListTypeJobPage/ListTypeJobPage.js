import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./style.css";
import ModalVideo from "../_components/ModalVideo/ModalVideo";
import { actFetchListJobMain } from "./modules/actions";
import { actFetchSubTypeJob } from "./modules/_modulesSubtypeJob/actions";
import { NavLink } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
const defaultImage = "/asset/image_defaut.png";

export default function ListTypeJobPage(props) {
  const id = props.match.params.id;
  const data2 = useSelector((state) => state.listSubTypeReducer.data);
  const loading2 = useSelector((state) => state.listSubTypeReducer.loading);
  const dataVideo = useSelector(
    (state) => state.categoriesSubTypeReducer.dataVideo
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchSubTypeJob(id));
  }, [id]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderSubTypeJob = () => {
    return data2?.subTypeJobs?.map((job, index) => {
      return (
        <NavLink
          key={`100${index}`}
          to={`/categories/${data2?.name}/${id}/${job?.name}/${job?._id}`}
        >
          {job?.name}
        </NavLink>
      );
    });
  };

  const renderImageSubTypeJob = () => {
    return data2?.subTypeJobs?.map((item, index) => (
      <ImageListItem
        style={{
          maxWidth: 310,
          maxHeight: 250,
        }}
        key={`1231${index}`}
      >
        <NavLink
          style={{ maxWidth: 310, maxHeight: 200 }}
          to={`/categories/${data2?.name}/${id}/${item?.name}/${item?._id}`}
        >
          <img
            className="image__marketplace"
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100%",
            }}
            src={`${
              !item?.image ? defaultImage : item?.image
            }?w=248&fit=crop&auto=format`}
            srcSet={`${
              !item?.image ? defaultImage : item?.image
            }?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
        </NavLink>
        <ImageListItemBar title={item.name} position="below" />
      </ImageListItem>
    ));
  };

  if (loading2) return <Loader />;

  return (
    <>
      <section style={{ minHeigt: "500px" }} className="mx-5 px-2">
        <div className="inner__header  ">
          <h1 className="desktop">{data2?.name}</h1>
          <p className="subtitle">
            A single place, millions of creative talents
          </p>
          <div
            onClick={() => {
              handleOpen();
            }}
            className="explanation-video"
          >
            <button className=" icon_play">
              <span
                className=" play-icon"
                style={{ width: 14, height: 14, marginRight: "4px" }}
              >
                <svg
                  fill="#4a73e8"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.00017 0.333374C6.48384 0.333374 5.00157 0.783016 3.74079 1.62544C2.48002 2.46786 1.49736 3.66523 0.91709 5.06613C0.336818 6.46703 0.184992 8.00855 0.480812 9.49573C0.776632 10.9829 1.50681 12.349 2.57901 13.4212C3.65122 14.4934 5.01729 15.2236 6.50447 15.5194C7.99166 15.8152 9.53317 15.6634 10.9341 15.0831C12.335 14.5028 13.5323 13.5202 14.3748 12.2594C15.2172 10.9986 15.6668 9.51636 15.6668 8.00004C15.6646 5.96739 14.8562 4.01863 13.4189 2.58132C11.9816 1.14402 10.0328 0.33558 8.00017 0.333374V0.333374ZM11.5025 8.28737L5.83583 11.6207C5.7852 11.6505 5.7276 11.6664 5.66885 11.6667C5.61011 11.6671 5.55232 11.6519 5.50133 11.6227C5.45034 11.5936 5.40796 11.5514 5.37849 11.5006C5.34902 11.4498 5.3335 11.3921 5.3335 11.3334V4.66671C5.3335 4.60796 5.34902 4.55026 5.37849 4.49945C5.40796 4.44864 5.45034 4.40651 5.50133 4.37735C5.55232 4.34818 5.61011 4.33301 5.66885 4.33336C5.7276 4.33372 5.7852 4.34959 5.83583 4.37937L11.5025 7.71271C11.5525 7.74214 11.594 7.78413 11.6229 7.83453C11.6517 7.88493 11.6669 7.94198 11.6669 8.00004C11.6669 8.0581 11.6517 8.11515 11.6229 8.16555C11.594 8.21595 11.5525 8.25794 11.5025 8.28737V8.28737Z" />
                </svg>
              </span>
              How Fiverr Works
            </button>
          </div>
        </div>
        <div className=" flex flex-col-reverse py-8 mx-auto lg:flex-row">
          <div className="flex flex-col  space-y-6 rounded-sm lg:w-1/3 xl:w-3/12 ">
            <aside className="w-full left__bar  sm:w-65  dark:text-coolGray-100">
              <nav className=" left__bar space-y-8 text-base">
                <div className="space-y-2">
                  <h2 className="text-base font-semibold tracking-widest  ">
                    {data2?.name}
                  </h2>
                  <div className="flex flex-col  space-y-1  ">
                    {renderSubTypeJob()}
                  </div>
                </div>
              </nav>
            </aside>
          </div>
          <div className="lg:w-3/4 xl:w-9/12 ">
            <ImageList cols={3} gap={12}>
              {renderImageSubTypeJob()}
            </ImageList>
          </div>
        </div>
      </section>
      <div className="footer__wrapper">
        <span className="footer__item">
          <h3>
            Your <b>Terms</b>
          </h3>
          Whatever you need to simplify your to do list, no matter your budget.
        </span>
        <span className="footer__item">
          <h3>
            Your <b>Timeline</b>
          </h3>
          Find services based on your goals and deadlines, it’s that simple.
        </span>
        <span className="footer__item">
          <h3>
            Your <b>Safety</b>
          </h3>
          Your payment is always secure, Fiverr is built to protect your peace
          of mind.
        </span>
      </div>
      <ModalVideo data={dataVideo} open={open} onClose={handleClose} />
    </>
  );
}
