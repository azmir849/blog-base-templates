import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogSearch = ({ generateValue, setShowSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (generateValue !== null) {
      setSearchValue(generateValue);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.length > 1) {
      router.push({
        pathname: `/search-posts/${searchValue}`,
      });
    } else {
      alert("Search content must be greater than 3 characters");
    }
  };

  const handleClose = () => {
    setShowSearch(false);
  };

  return (
    <>
      <div className="sidebar__widget ml-5 ">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={(e) => handleSearch(e)}>
              <div className="sidebar__search-input-2">
                <input
                  value={searchValue}
                  type="text"
                  placeholder="Enter..."
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button>
                  <span onClick={handleClose}>
                    <i className="far fa-close"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSearch;
