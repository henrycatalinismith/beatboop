import searchReducer, { query, results, SearchState } from "./searchSlice";

describe("search reducer", () => {
  it("stores the search query", () => {
    const initialState: SearchState = {
      query: "",
      results: [],
    };
    const action = query("test");
    const output = searchReducer(initialState, action);
    expect(output).toMatchInlineSnapshot(`
      Object {
        "query": "test",
        "results": Array [],
      }
    `);
  });

  it("stores search results", () => {
    const initialState: SearchState = {
      query: "test",
      results: [],
    };
    const action = results({
      query: "test",
      tracks: [
        {
          id: 140137930,
          title: "「Exclusive Coupé」",
          duration: 234940,
          artwork_url:
            "https://i1.sndcdn.com/artworks-000190668115-hzjyco-large.jpg",
          permalink_url: "https://soundcloud.com/myroneofficial/exclusive-coup",
          user: {
            username: "MYRONE",
            permalink_url: "https://soundcloud.com/myroneofficial",
          },
        },
      ],
    });
    const output = searchReducer(initialState, action);
    expect(output).toMatchInlineSnapshot(`
      Object {
        "query": "test",
        "results": Array [
          Object {
            "artwork_url": "https://i1.sndcdn.com/artworks-000190668115-hzjyco-large.jpg",
            "duration": 234940,
            "id": 140137930,
            "permalink_url": "https://soundcloud.com/myroneofficial/exclusive-coup",
            "title": "「Exclusive Coupé」",
            "user": Object {
              "permalink_url": "https://soundcloud.com/myroneofficial",
              "username": "MYRONE",
            },
          },
        ],
      }
    `);
  });

  it("ignores search results for previous queries", () => {
    const initialState: SearchState = {
      query: "test",
      results: [],
    };
    const action = results({
      query: "tes",
      tracks: [
        {
          id: 140137930,
          title: "「Exclusive Coupé」",
          duration: 234940,
          artwork_url:
            "https://i1.sndcdn.com/artworks-000190668115-hzjyco-large.jpg",
          permalink_url: "https://soundcloud.com/myroneofficial/exclusive-coup",
          user: {
            username: "MYRONE",
            permalink_url: "https://soundcloud.com/myroneofficial",
          },
        },
      ],
    });
    const output = searchReducer(initialState, action);
    expect(output).toMatchInlineSnapshot(`
      Object {
        "query": "test",
        "results": Array [],
      }
    `);
  });
});
