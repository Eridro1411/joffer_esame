<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function create_offer(Request $request)
    {
        $newOfferData = json_decode($request->getContent());

        $newOffer = new Offer();
        $newOffer->company = $newOfferData->company;
        $newOffer->language = $newOfferData->language;
        $newOffer->RAL = $newOfferData->RAL;
        $newOffer->experience = $newOfferData->experience;
        $newOffer->location = $newOfferData->location;
        $newOffer->description = $newOfferData->description;

        $newOffer->save();
    }

    public function view_offers()
    {
        $allOffers = new Offer();
        return $allOffers->all();
    }
    public function offer_detail($id)
    {
        return Offer::where('id', $id)->first();
    }
}
