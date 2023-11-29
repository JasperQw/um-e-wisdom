import { HoldRequestType } from "@/dto/holdDTO";
import { PendingApproveReturn } from "@/dto/returnDTO";

export async function getAllHold(): Promise<{
  pending_return: HoldRequestType[];
  pending_pick_up: HoldRequestType[];
}> {
  try {
    const req = await fetch("/api/hold/get_hold_book");
    const res: {
      pending_return: HoldRequestType[];
      pending_pick_up: HoldRequestType[];
      status: number;
    } = await req.json();
    return {
      pending_return: res.pending_return,
      pending_pick_up: res.pending_pick_up,
    };
  } catch (error) {
    console.log(error);
    return {
      pending_pick_up: [],
      pending_return: [],
    };
  }
}

export async function removeHold(holdId: number): Promise<number> {
  try {
    const req = await fetch("/api/hold/remove_hold_book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ holdId }),
    });

    const res: { status: number } = await req.json();

    return res.status;
  } catch (error) {
    console.log(error);
    return 400;
  }
}
