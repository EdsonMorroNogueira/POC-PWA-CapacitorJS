import { FormEvent, useState } from "react";

export default function App() {
  const [items, setItems] = useState<string[]>([]);

  function aoRemoverItem(itemParaRemover: string) {
    const newItems = items.filter((item) => {
      return item !== itemParaRemover;
    });
    setItems(newItems);
  }

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("item") as HTMLInputElement;
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  return (
    <>
      <h1 className="m-[0 auto] text-center max-w-sm">
        Project 4: Shopping List
      </h1>
      <div className="m-[0 auto] text-center max-w-sm mt-12 bg-white border-2 border-dashed border-black">
        <h2>Items To Buy</h2>
        <form onSubmit={aoEnviar}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            required
          />
          <button>Add</button>
        </form>
        <ul className="flex-col flex w-full justify-center items-center p-0">
          {items.map((item, index) => (
            <Item
              aoRemoverItem={aoRemoverItem}
              key={item + index}
              item={item}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item(props: Item) {
  return (
    <li>
      {props.item}
      <button
        className="border-none bg-transparent font-bold text-base text-red-600"
        onClick={() => props.aoRemoverItem(props.item)}
      >
        X
      </button>
    </li>
  );
}

interface Item {
  item: string;
  aoRemoverItem: (item: string) => void;
}
