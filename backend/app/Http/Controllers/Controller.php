<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    function StudentInput(Request $req){
    DB::beginTransaction();
    try{
        $this->validate($req, [
            'nama' => 'required'
        ]);
    $mahasiswa = new mahasiswa;
    $mahasiswa->nama = $req->input('nama');
    $mahasiswa->alamat = $req->input('alamat');
    $mahasiswa->phoneno = $req->input('phoneno');
    $mahasiswa->save();
    DB::commit();
    return response()->json($mahasiswa, 200);
    }
    catch(\Exception $e){
        DB::rollback();
        return response()->json(['message'=>'Failed to Sign Up, exception:' + $e], 500);
    }
}
function StudentUpdate(Request $req){
    DB::beginTransaction();
    try {
    $NIM= $req->input('id');
    $newaddress = $req->input('alamat');
    $newphoneno = $req->input('phoneno');
    DB::update('update mahasiswas set alamat = ?, phoneno =?  where id = ?' , [$newaddress, $newphoneno, $id]);
    return response()->json(['message' => 'Success'], 200);
    
    }
    catch(\Exception $e){
        DB::rollback();
        return response()->json(['message'=>'Failed to Sign Up, exception:' + $e], 500);
    }
}
}